# RickAndMorty SDK utility: make_context
require_relative '../core/context'
module RickAndMortyUtilities
  MakeContext = ->(ctxmap, basectx) {
    RickAndMortyContext.new(ctxmap, basectx)
  }
end
