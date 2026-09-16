package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewCharacterEntityFunc func(client *RickAndMortySDK, entopts map[string]any) RickAndMortyEntity

var NewEpisodeEntityFunc func(client *RickAndMortySDK, entopts map[string]any) RickAndMortyEntity

var NewLocationEntityFunc func(client *RickAndMortySDK, entopts map[string]any) RickAndMortyEntity

