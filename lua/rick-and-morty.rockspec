package = "voxgig-sdk-rick-and-morty"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/rick-and-morty-sdk.git"
}
description = {
  summary = "RickAndMorty SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["rick-and-morty_sdk"] = "rick-and-morty_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
