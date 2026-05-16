# RickAndMorty SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module RickAndMortyFeatures
  def self.make_feature(name)
    case name
    when "base"
      RickAndMortyBaseFeature.new
    when "test"
      RickAndMortyTestFeature.new
    else
      RickAndMortyBaseFeature.new
    end
  end
end
