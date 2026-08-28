# RickAndMorty Golang SDK



The Golang SDK for the RickAndMorty API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Character(nil)` — each with the same small set of operations (`List`, `Load`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/rick-and-morty-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/rick-and-morty-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/rick-and-morty-sdk/go=../rick-and-morty-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/rick-and-morty-sdk/go"
)

func main() {
    client := sdk.New()

    // List character records — the value is the array of records itself.
    characters, err := client.Character(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range characters.([]any) {
        fmt.Println(item)
    }

    // Load a single character — the value is the loaded record.
    character, err := client.Character(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(character)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
locations, err := client.Location(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = locations
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

location, err := client.Location(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(location) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewRickAndMortySDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
RICK_AND_MORTY_TEST_LIVE=TRUE
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewRickAndMortySDK

```go
func NewRickAndMortySDK(options map[string]any) *RickAndMortySDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *RickAndMortySDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### RickAndMortySDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Character` | `(data map[string]any) RickAndMortyEntity` | Create a Character entity instance. |
| `Episode` | `(data map[string]any) RickAndMortyEntity` | Create an Episode entity instance. |
| `Location` | `(data map[string]any) RickAndMortyEntity` | Create a Location entity instance. |

### Entity interface (RickAndMortyEntity)

All entities implement the `RickAndMortyEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    character, err := client.Character(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // character is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Character

| Field | Description |
| --- | --- |
| `"created"` | Time at which the character was created in the database |
| `"episode"` | List of episodes in which this character appeared |
| `"gender"` | The gender of the character |
| `"id"` | The id of the character |
| `"image"` | Link to the character's image |
| `"location"` |  |
| `"name"` | The name of the character |
| `"origin"` |  |
| `"species"` | The species of the character |
| `"status"` | The status of the character |
| `"type"` | The type or subspecies of the character |
| `"url"` | Link to the character's own URL endpoint |

Operations: List, Load.

API path: `/character`

#### Episode

| Field | Description |
| --- | --- |
| `"air_date"` | The air date of the episode |
| `"characters"` | List of characters who have been seen in this episode |
| `"created"` | Time at which the episode was created in the database |
| `"episode"` | The code of the episode (e.g., S01E01) |
| `"id"` | The id of the episode |
| `"name"` | The name of the episode |
| `"url"` | Link to the episode's own URL endpoint |

Operations: List, Load.

API path: `/episode`

#### Location

| Field | Description |
| --- | --- |
| `"created"` | Time at which the location was created in the database |
| `"dimension"` | The dimension in which the location is located |
| `"id"` | The id of the location |
| `"name"` | The name of the location |
| `"residents"` | List of characters who have been last seen in this location |
| `"type"` | The type of the location |
| `"url"` | Link to the location's own URL endpoint |

Operations: List, Load.

API path: `/location`



## Entities


### Character

Create an instance: `character := client.Character(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `string` | Time at which the character was created in the database |
| `episode` | `[]any` | List of episodes in which this character appeared |
| `gender` | `string` | The gender of the character |
| `id` | `int` | The id of the character |
| `image` | `string` | Link to the character's image |
| `location` | `map[string]any` |  |
| `name` | `string` | The name of the character |
| `origin` | `map[string]any` |  |
| `species` | `string` | The species of the character |
| `status` | `string` | The status of the character |
| `type` | `string` | The type or subspecies of the character |
| `url` | `string` | Link to the character's own URL endpoint |

#### Example: Load

```go
character, err := client.Character(nil).Load(map[string]any{"id": "character_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(character) // the loaded record
```

#### Example: List

```go
characters, err := client.Character(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(characters) // the array of records
```


### Episode

Create an instance: `episode := client.Episode(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `air_date` | `string` | The air date of the episode |
| `characters` | `[]any` | List of characters who have been seen in this episode |
| `created` | `string` | Time at which the episode was created in the database |
| `episode` | `string` | The code of the episode (e.g., S01E01) |
| `id` | `int` | The id of the episode |
| `name` | `string` | The name of the episode |
| `url` | `string` | Link to the episode's own URL endpoint |

#### Example: Load

```go
episode, err := client.Episode(nil).Load(map[string]any{"id": "episode_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(episode) // the loaded record
```

#### Example: List

```go
episodes, err := client.Episode(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(episodes) // the array of records
```


### Location

Create an instance: `location := client.Location(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `string` | Time at which the location was created in the database |
| `dimension` | `string` | The dimension in which the location is located |
| `id` | `int` | The id of the location |
| `name` | `string` | The name of the location |
| `residents` | `[]any` | List of characters who have been last seen in this location |
| `type` | `string` | The type of the location |
| `url` | `string` | Link to the location's own URL endpoint |

#### Example: Load

```go
location, err := client.Location(nil).Load(map[string]any{"id": "location_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(location) // the loaded record
```

#### Example: List

```go
locations, err := client.Location(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(locations) // the array of records
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/rick-and-morty-sdk/go/
├── rick-and-morty.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/rick-and-morty-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
location := client.Location(nil)
location.List(nil, nil)

// location.Data() now returns the location data from the last list
// location.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
