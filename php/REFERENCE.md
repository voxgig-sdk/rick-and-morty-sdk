# RickAndMorty PHP SDK Reference

Complete API reference for the RickAndMorty PHP SDK.


## RickAndMortySDK

### Constructor

```php
require_once __DIR__ . '/rickandmorty_sdk.php';

$client = new RickAndMortySDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `RickAndMortySDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = RickAndMortySDK::test();
```


### Instance Methods

#### `Character($data = null)`

Create a new `CharacterEntity` instance. Pass `null` for no initial data.

#### `Episode($data = null)`

Create a new `EpisodeEntity` instance. Pass `null` for no initial data.

#### `Location($data = null)`

Create a new `LocationEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): RickAndMortyUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## CharacterEntity

```php
$character = $client->Character();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `string` | No | Time at which the character was created in the database |
| `episode` | `array` | No | List of episodes in which this character appeared |
| `gender` | `string` | No | The gender of the character |
| `id` | `int` | No | The id of the character |
| `image` | `string` | No | Link to the character's image |
| `location` | `array` | No |  |
| `name` | `string` | No | The name of the character |
| `origin` | `array` | No |  |
| `species` | `string` | No | The species of the character |
| `status` | `string` | No | The status of the character |
| `type` | `string` | No | The type or subspecies of the character |
| `url` | `string` | No | Link to the character's own URL endpoint |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Character()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Character()->load(["id" => "character_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CharacterEntity`

Create a new `CharacterEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EpisodeEntity

```php
$episode = $client->Episode();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `air_date` | `string` | No | The air date of the episode |
| `characters` | `array` | No | List of characters who have been seen in this episode |
| `created` | `string` | No | Time at which the episode was created in the database |
| `episode` | `string` | No | The code of the episode (e.g., S01E01) |
| `id` | `int` | No | The id of the episode |
| `name` | `string` | No | The name of the episode |
| `url` | `string` | No | Link to the episode's own URL endpoint |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Episode()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Episode()->load(["id" => "episode_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EpisodeEntity`

Create a new `EpisodeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LocationEntity

```php
$location = $client->Location();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `string` | No | Time at which the location was created in the database |
| `dimension` | `string` | No | The dimension in which the location is located |
| `id` | `int` | No | The id of the location |
| `name` | `string` | No | The name of the location |
| `residents` | `array` | No | List of characters who have been last seen in this location |
| `type` | `string` | No | The type of the location |
| `url` | `string` | No | Link to the location's own URL endpoint |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Location()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Location()->load(["id" => "location_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LocationEntity`

Create a new `LocationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new RickAndMortySDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

