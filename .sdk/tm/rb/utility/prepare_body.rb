# RickAndMorty SDK utility: prepare_body
require_relative 'media'
module RickAndMortyUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return RickAndMortyUtilities.raw_body(ctx.reqdata) if RickAndMortyUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
