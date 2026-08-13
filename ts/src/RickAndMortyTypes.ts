// Typed models for the RickAndMorty SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Character {
  created?: string
  episode?: any[]
  gender?: string
  id?: number
  image?: string
  location?: Record<string, any>
  name?: string
  origin?: Record<string, any>
  species?: string
  status?: string
  type?: string
  url?: string
}

export interface CharacterLoadMatch {
  id: string
}

export interface CharacterListMatch {
  created?: string
  episode?: any[]
  gender?: string
  id?: number
  image?: string
  location?: Record<string, any>
  name?: string
  origin?: Record<string, any>
  species?: string
  status?: string
  type?: string
  url?: string
}

export interface Episode {
  air_date?: string
  characters?: any[]
  created?: string
  episode?: string
  id?: number
  name?: string
  url?: string
}

export interface EpisodeLoadMatch {
  id: string
}

export interface EpisodeListMatch {
  air_date?: string
  characters?: any[]
  created?: string
  episode?: string
  id?: number
  name?: string
  url?: string
}

export interface Location {
  created?: string
  dimension?: string
  id?: number
  name?: string
  residents?: any[]
  type?: string
  url?: string
}

export interface LocationLoadMatch {
  id: string
}

export interface LocationListMatch {
  created?: string
  dimension?: string
  id?: number
  name?: string
  residents?: any[]
  type?: string
  url?: string
}

