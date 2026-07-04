# Typed models for the RickAndMorty SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Character:
    created: Optional[str] = None
    episode: Optional[list] = None
    gender: Optional[str] = None
    id: Optional[int] = None
    image: Optional[str] = None
    location: Optional[dict] = None
    name: Optional[str] = None
    origin: Optional[dict] = None
    species: Optional[str] = None
    status: Optional[str] = None
    type: Optional[str] = None
    url: Optional[str] = None


@dataclass
class CharacterLoadMatch:
    id: str


@dataclass
class CharacterListMatch:
    created: Optional[str] = None
    episode: Optional[list] = None
    gender: Optional[str] = None
    id: Optional[int] = None
    image: Optional[str] = None
    location: Optional[dict] = None
    name: Optional[str] = None
    origin: Optional[dict] = None
    species: Optional[str] = None
    status: Optional[str] = None
    type: Optional[str] = None
    url: Optional[str] = None


@dataclass
class Episode:
    air_date: Optional[str] = None
    character: Optional[list] = None
    created: Optional[str] = None
    episode: Optional[str] = None
    id: Optional[int] = None
    name: Optional[str] = None
    url: Optional[str] = None


@dataclass
class EpisodeLoadMatch:
    id: str


@dataclass
class EpisodeListMatch:
    air_date: Optional[str] = None
    character: Optional[list] = None
    created: Optional[str] = None
    episode: Optional[str] = None
    id: Optional[int] = None
    name: Optional[str] = None
    url: Optional[str] = None


@dataclass
class Location:
    created: Optional[str] = None
    dimension: Optional[str] = None
    id: Optional[int] = None
    name: Optional[str] = None
    resident: Optional[list] = None
    type: Optional[str] = None
    url: Optional[str] = None


@dataclass
class LocationLoadMatch:
    id: str


@dataclass
class LocationListMatch:
    created: Optional[str] = None
    dimension: Optional[str] = None
    id: Optional[int] = None
    name: Optional[str] = None
    resident: Optional[list] = None
    type: Optional[str] = None
    url: Optional[str] = None

