package = "voxgig-sdk-rick-and-morty"
version = "0.0.1-1"
source = {
  -- git+https (GitHub dropped git:// in 2022); pin the install to the release
  -- tag pushed by `make publish`, and point at the lua/ subdir of the monorepo.
  url = "git+https://github.com/voxgig-sdk/rick-and-morty-sdk.git",
  tag = "lua/v0.0.1",
  dir = "rick-and-morty-sdk/lua"
}
description = {
  summary = "Unofficial generated Lua SDK for the Rick and Morty public API. Not affiliated with or endorsed by the upstream API provider.",
  homepage = "https://github.com/voxgig-sdk/rick-and-morty-sdk",
  issues_url = "https://github.com/voxgig-sdk/rick-and-morty-sdk/issues",
  license = "MIT",
  labels = { "voxgig", "sdk", "generated-sdk", "openapi", "api-client", "rick-and-morty" }
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["rick-and-morty_sdk"] = "rick-and-morty_sdk.lua",
    ["config"] = "config.lua",
    ["config_shared"] = "config_shared.lua",
    ["features"] = "features.lua",
  }
}
