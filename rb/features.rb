# RickAndMorty SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module RickAndMortyFeatures
  def self.make_feature(name)
    case name
    when "base"
      RickAndMortyBaseFeature.new
    when "ratelimit"
      RickAndMortyRatelimitFeature.new
    when "retry"
      RickAndMortyRetryFeature.new
    when "test"
      RickAndMortyTestFeature.new
    when "timeout"
      RickAndMortyTimeoutFeature.new
    else
      RickAndMortyBaseFeature.new
    end
  end
end
