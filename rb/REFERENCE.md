# RickAndMorty Ruby SDK Reference

Complete API reference for the RickAndMorty Ruby SDK.


## RickAndMortySDK

### Constructor

```ruby
require_relative 'RickAndMorty_sdk'

client = RickAndMortySDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `RickAndMortySDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = RickAndMortySDK.test
```


### Instance Methods

#### `Character(data = nil)`

Create a new `Character` entity instance. Pass `nil` for no initial data.

#### `Episode(data = nil)`

Create a new `Episode` entity instance. Pass `nil` for no initial data.

#### `Location(data = nil)`

Create a new `Location` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## CharacterEntity

```ruby
character = client.Character
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `String` | No | Time at which the character was created in the database |
| `episode` | `Array` | No | List of episodes in which this character appeared |
| `gender` | `String` | No | The gender of the character |
| `id` | `Integer` | No | The id of the character |
| `image` | `String` | No | Link to the character's image |
| `location` | `Hash` | No |  |
| `name` | `String` | No | The name of the character |
| `origin` | `Hash` | No |  |
| `species` | `String` | No | The species of the character |
| `status` | `String` | No | The status of the character |
| `type` | `String` | No | The type or subspecies of the character |
| `url` | `String` | No | Link to the character's own URL endpoint |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Character.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Character.load({ "id" => "character_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CharacterEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EpisodeEntity

```ruby
episode = client.Episode
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `air_date` | `String` | No | The air date of the episode |
| `characters` | `Array` | No | List of characters who have been seen in this episode |
| `created` | `String` | No | Time at which the episode was created in the database |
| `episode` | `String` | No | The code of the episode (e.g., S01E01) |
| `id` | `Integer` | No | The id of the episode |
| `name` | `String` | No | The name of the episode |
| `url` | `String` | No | Link to the episode's own URL endpoint |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Episode.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Episode.load({ "id" => "episode_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EpisodeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LocationEntity

```ruby
location = client.Location
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `String` | No | Time at which the location was created in the database |
| `dimension` | `String` | No | The dimension in which the location is located |
| `id` | `Integer` | No | The id of the location |
| `name` | `String` | No | The name of the location |
| `residents` | `Array` | No | List of characters who have been last seen in this location |
| `type` | `String` | No | The type of the location |
| `url` | `String` | No | Link to the location's own URL endpoint |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Location.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Location.load({ "id" => "location_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LocationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = RickAndMortySDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

