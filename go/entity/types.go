// Typed models for the RickAndMorty SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Character is the typed data model for the character entity.
type Character struct {
	Created *string `json:"created,omitempty"`
	Episode *[]any `json:"episode,omitempty"`
	Gender *string `json:"gender,omitempty"`
	Id *int `json:"id,omitempty"`
	Image *string `json:"image,omitempty"`
	Location *map[string]any `json:"location,omitempty"`
	Name *string `json:"name,omitempty"`
	Origin *map[string]any `json:"origin,omitempty"`
	Species *string `json:"species,omitempty"`
	Status *string `json:"status,omitempty"`
	Type *string `json:"type,omitempty"`
	Url *string `json:"url,omitempty"`
}

// CharacterLoadMatch is the typed request payload for Character.LoadTyped.
type CharacterLoadMatch struct {
	Id string `json:"id"`
}

// CharacterListMatch is the typed request payload for Character.ListTyped.
type CharacterListMatch struct {
	Created *string `json:"created,omitempty"`
	Episode *[]any `json:"episode,omitempty"`
	Gender *string `json:"gender,omitempty"`
	Id *int `json:"id,omitempty"`
	Image *string `json:"image,omitempty"`
	Location *map[string]any `json:"location,omitempty"`
	Name *string `json:"name,omitempty"`
	Origin *map[string]any `json:"origin,omitempty"`
	Species *string `json:"species,omitempty"`
	Status *string `json:"status,omitempty"`
	Type *string `json:"type,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Episode is the typed data model for the episode entity.
type Episode struct {
	AirDate *string `json:"air_date,omitempty"`
	Character *[]any `json:"character,omitempty"`
	Created *string `json:"created,omitempty"`
	Episode *string `json:"episode,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Url *string `json:"url,omitempty"`
}

// EpisodeLoadMatch is the typed request payload for Episode.LoadTyped.
type EpisodeLoadMatch struct {
	Id string `json:"id"`
}

// EpisodeListMatch is the typed request payload for Episode.ListTyped.
type EpisodeListMatch struct {
	AirDate *string `json:"air_date,omitempty"`
	Character *[]any `json:"character,omitempty"`
	Created *string `json:"created,omitempty"`
	Episode *string `json:"episode,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Location is the typed data model for the location entity.
type Location struct {
	Created *string `json:"created,omitempty"`
	Dimension *string `json:"dimension,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Resident *[]any `json:"resident,omitempty"`
	Type *string `json:"type,omitempty"`
	Url *string `json:"url,omitempty"`
}

// LocationLoadMatch is the typed request payload for Location.LoadTyped.
type LocationLoadMatch struct {
	Id string `json:"id"`
}

// LocationListMatch is the typed request payload for Location.ListTyped.
type LocationListMatch struct {
	Created *string `json:"created,omitempty"`
	Dimension *string `json:"dimension,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Resident *[]any `json:"resident,omitempty"`
	Type *string `json:"type,omitempty"`
	Url *string `json:"url,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
