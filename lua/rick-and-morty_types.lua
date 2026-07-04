-- Typed models for the RickAndMorty SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Character
---@field created? string
---@field episode? table
---@field gender? string
---@field id? number
---@field image? string
---@field location? table
---@field name? string
---@field origin? table
---@field species? string
---@field status? string
---@field type? string
---@field url? string

---@class CharacterLoadMatch
---@field id string

---@class CharacterListMatch

---@class Episode
---@field air_date? string
---@field character? table
---@field created? string
---@field episode? string
---@field id? number
---@field name? string
---@field url? string

---@class EpisodeLoadMatch
---@field id string

---@class EpisodeListMatch

---@class Location
---@field created? string
---@field dimension? string
---@field id? number
---@field name? string
---@field resident? table
---@field type? string
---@field url? string

---@class LocationLoadMatch
---@field id string

---@class LocationListMatch

local M = {}

return M
