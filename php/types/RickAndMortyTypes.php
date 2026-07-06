<?php
declare(strict_types=1);

// Typed models for the RickAndMorty SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Character entity data model. */
class Character
{
    public ?string $created = null;
    public ?array $episode = null;
    public ?string $gender = null;
    public ?int $id = null;
    public ?string $image = null;
    public ?array $location = null;
    public ?string $name = null;
    public ?array $origin = null;
    public ?string $species = null;
    public ?string $status = null;
    public ?string $type = null;
    public ?string $url = null;
}

/** Request payload for Character#load. */
class CharacterLoadMatch
{
    public string $id;
}

/** Request payload for Character#list. */
class CharacterListMatch
{
    public ?string $created = null;
    public ?array $episode = null;
    public ?string $gender = null;
    public ?int $id = null;
    public ?string $image = null;
    public ?array $location = null;
    public ?string $name = null;
    public ?array $origin = null;
    public ?string $species = null;
    public ?string $status = null;
    public ?string $type = null;
    public ?string $url = null;
}

/** Episode entity data model. */
class Episode
{
    public ?string $air_date = null;
    public ?array $character = null;
    public ?string $created = null;
    public ?string $episode = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $url = null;
}

/** Request payload for Episode#load. */
class EpisodeLoadMatch
{
    public string $id;
}

/** Request payload for Episode#list. */
class EpisodeListMatch
{
    public ?string $air_date = null;
    public ?array $character = null;
    public ?string $created = null;
    public ?string $episode = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $url = null;
}

/** Location entity data model. */
class Location
{
    public ?string $created = null;
    public ?string $dimension = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?array $resident = null;
    public ?string $type = null;
    public ?string $url = null;
}

/** Request payload for Location#load. */
class LocationLoadMatch
{
    public string $id;
}

/** Request payload for Location#list. */
class LocationListMatch
{
    public ?string $created = null;
    public ?string $dimension = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?array $resident = null;
    public ?string $type = null;
    public ?string $url = null;
}

