# RickAndMorty SDK utility: feature_add
module RickAndMortyUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
