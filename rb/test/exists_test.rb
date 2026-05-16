# RickAndMorty SDK exists test

require "minitest/autorun"
require_relative "../RickAndMorty_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = RickAndMortySDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
