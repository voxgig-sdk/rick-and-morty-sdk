# frozen_string_literal: true

# Typed models for the RickAndMorty SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Character entity data model.
#
# @!attribute [rw] created
#   @return [String, nil]
#
# @!attribute [rw] episode
#   @return [Array, nil]
#
# @!attribute [rw] gender
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] origin
#   @return [Hash, nil]
#
# @!attribute [rw] species
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Character = Struct.new(
  :created,
  :episode,
  :gender,
  :id,
  :image,
  :location,
  :name,
  :origin,
  :species,
  :status,
  :type,
  :url,
  keyword_init: true
)

# Request payload for Character#load.
#
# @!attribute [rw] id
#   @return [String]
CharacterLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Match filter for Character#list (any subset of Character fields).
#
# @!attribute [rw] created
#   @return [String, nil]
#
# @!attribute [rw] episode
#   @return [Array, nil]
#
# @!attribute [rw] gender
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] origin
#   @return [Hash, nil]
#
# @!attribute [rw] species
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
CharacterListMatch = Struct.new(
  :created,
  :episode,
  :gender,
  :id,
  :image,
  :location,
  :name,
  :origin,
  :species,
  :status,
  :type,
  :url,
  keyword_init: true
)

# Episode entity data model.
#
# @!attribute [rw] air_date
#   @return [String, nil]
#
# @!attribute [rw] character
#   @return [Array, nil]
#
# @!attribute [rw] created
#   @return [String, nil]
#
# @!attribute [rw] episode
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Episode = Struct.new(
  :air_date,
  :character,
  :created,
  :episode,
  :id,
  :name,
  :url,
  keyword_init: true
)

# Request payload for Episode#load.
#
# @!attribute [rw] id
#   @return [String]
EpisodeLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Match filter for Episode#list (any subset of Episode fields).
#
# @!attribute [rw] air_date
#   @return [String, nil]
#
# @!attribute [rw] character
#   @return [Array, nil]
#
# @!attribute [rw] created
#   @return [String, nil]
#
# @!attribute [rw] episode
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
EpisodeListMatch = Struct.new(
  :air_date,
  :character,
  :created,
  :episode,
  :id,
  :name,
  :url,
  keyword_init: true
)

# Location entity data model.
#
# @!attribute [rw] created
#   @return [String, nil]
#
# @!attribute [rw] dimension
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] resident
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Location = Struct.new(
  :created,
  :dimension,
  :id,
  :name,
  :resident,
  :type,
  :url,
  keyword_init: true
)

# Request payload for Location#load.
#
# @!attribute [rw] id
#   @return [String]
LocationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Match filter for Location#list (any subset of Location fields).
#
# @!attribute [rw] created
#   @return [String, nil]
#
# @!attribute [rw] dimension
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] resident
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
LocationListMatch = Struct.new(
  :created,
  :dimension,
  :id,
  :name,
  :resident,
  :type,
  :url,
  keyword_init: true
)

