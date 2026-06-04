# RickAndMorty SDK

Query characters, locations, and episodes from the Rick and Morty animated series via REST or GraphQL

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Rick and Morty API

The Rick and Morty API is a free public REST and GraphQL service maintained by [Axel Fuhrmann](https://github.com/afuh) that exposes data drawn from the animated series *Rick and Morty*. The REST base URL is `https://rickandmortyapi.com/api` and a GraphQL endpoint is available at `https://rickandmortyapi.com/graphql`.

What you get from the API:
- Characters (826+) with `name`, `status`, `species`, `type`, `gender`, `origin`, `location`, `image`, an `episode` list, and a creation timestamp.
- Locations (126+) with `name`, `type`, `dimension`, a `residents` list, and a creation timestamp.
- Episodes (51+) with `name`, `air_date`, episode code, a `characters` list, and a creation timestamp.

The API is publicly accessible with no authentication. List responses are paginated (up to 20 items per page). Rate limits are not formally documented. Community client libraries exist for many languages including JavaScript, Python, Go, Ruby, Rust, and Java.

## Try it

**TypeScript**
```bash
npm install rick-and-morty
```

**Python**
```bash
pip install rick-and-morty-sdk
```

**PHP**
```bash
composer require voxgig/rick-and-morty-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/rick-and-morty-sdk/go
```

**Ruby**
```bash
gem install rick-and-morty-sdk
```

**Lua**
```bash
luarocks install rick-and-morty-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { RickAndMortySDK } from 'rick-and-morty'

const client = new RickAndMortySDK({})

// List all characters
const characters = await client.Character().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o rick-and-morty-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "rick-and-morty": {
      "command": "/abs/path/to/rick-and-morty-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Character** | A person, alien, or creature from the show, with status, species, origin, and the list of episodes they appear in; served from `/api/character`. | `/character` |
| **Episode** | A single episode with name, air date, episode code (e.g. `S01E01`), and the list of characters that appear in it; served from `/api/episode`. | `/episode` |
| **Location** | A planet, dimension, or other place from the show, with type, dimension, and the residents that call it home; served from `/api/location`. | `/location` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from rickandmorty_sdk import RickAndMortySDK

client = RickAndMortySDK({})

# List all characters
characters, err = client.Character(None).list(None, None)

# Load a specific character
character, err = client.Character(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'rickandmorty_sdk.php';

$client = new RickAndMortySDK([]);

// List all characters
[$characters, $err] = $client->Character(null)->list(null, null);

// Load a specific character
[$character, $err] = $client->Character(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/rick-and-morty-sdk/go"

client := sdk.NewRickAndMortySDK(map[string]any{})

// List all characters
characters, err := client.Character(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "RickAndMorty_sdk"

client = RickAndMortySDK.new({})

# List all characters
characters, err = client.Character(nil).list(nil, nil)

# Load a specific character
character, err = client.Character(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("rick-and-morty_sdk")

local client = sdk.new({})

-- List all characters
local characters, err = client:Character(nil):list(nil, nil)

-- Load a specific character
local character, err = client:Character(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = RickAndMortySDK.test()
const result = await client.Character().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = RickAndMortySDK.test(None, None)
result, err = client.Character(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = RickAndMortySDK::test(null, null);
[$result, $err] = $client->Character(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Character(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = RickAndMortySDK.test(nil, nil)
result, err = client.Character(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Character(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Rick and Morty API

- Upstream: [https://rickandmortyapi.com](https://rickandmortyapi.com)
- API docs: [https://rickandmortyapi.com/documentation](https://rickandmortyapi.com/documentation)

- Free and open to use for non-commercial and educational projects, no API key or registration required.
- No formal licence terms are published on the documentation site; attribution to the maintainer is appreciated.
- Rick and Morty character names, images, and related assets are the property of their respective owners (Cartoon Network / Adult Swim) and are not licensed by this API.

---

Generated from the Rick and Morty API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
