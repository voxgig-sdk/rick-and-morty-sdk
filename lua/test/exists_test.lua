-- RickAndMorty SDK exists test

local sdk = require("rick-and-morty_sdk")

describe("RickAndMortySDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
