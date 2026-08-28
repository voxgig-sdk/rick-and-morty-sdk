# Typed models for the RickAndMorty SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Character(TypedDict, total=False):
    created: str
    episode: list
    gender: str
    id: int
    image: str
    location: dict
    name: str
    origin: dict
    species: str
    status: str
    type: str
    url: str


class CharacterLoadMatch(TypedDict):
    id: str


class CharacterListMatch(TypedDict, total=False):
    gender: str
    name: str
    page: int
    species: str
    status: str
    type: str


class Episode(TypedDict, total=False):
    air_date: str
    characters: list
    created: str
    episode: str
    id: int
    name: str
    url: str


class EpisodeLoadMatch(TypedDict):
    id: str


class EpisodeListMatch(TypedDict, total=False):
    episode: str
    name: str
    page: int


class Location(TypedDict, total=False):
    created: str
    dimension: str
    id: int
    name: str
    residents: list
    type: str
    url: str


class LocationLoadMatch(TypedDict):
    id: str


class LocationListMatch(TypedDict, total=False):
    dimension: str
    name: str
    page: int
    type: str
