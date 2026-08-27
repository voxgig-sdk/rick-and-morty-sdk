-- RickAndMorty SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "RickAndMorty",
      slug = "rick-and-morty",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://rickandmortyapi.com/api",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["character"] = {},
        ["episode"] = {},
        ["location"] = {},
      },
    },
    entity = {
      ["character"] = {
        ["fields"] = {
          {
            ["name"] = "created",
            ["short"] = "Time at which the character was created in the database",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "episode",
            ["short"] = "List of episodes in which this character appeared",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "gender",
            ["short"] = "The gender of the character",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "The id of the character",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "image",
            ["short"] = "Link to the character's image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "location",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "name",
            ["short"] = "The name of the character",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "origin",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "species",
            ["short"] = "The species of the character",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["short"] = "The status of the character",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["short"] = "The type or subspecies of the character",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["short"] = "Link to the character's own URL endpoint",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "character",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "gender",
                      ["orig"] = "gender",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "species",
                      ["orig"] = "species",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "status",
                      ["orig"] = "status",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "type",
                      ["orig"] = "type",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/character",
                ["parts"] = {
                  "character",
                },
                ["select"] = {
                  ["exist"] = {
                    "gender",
                    "name",
                    "page",
                    "species",
                    "status",
                    "type",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/character/{id}",
                ["parts"] = {
                  "character",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["episode"] = {
        ["fields"] = {
          {
            ["name"] = "air_date",
            ["short"] = "The air date of the episode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "characters",
            ["short"] = "List of characters who have been seen in this episode",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "created",
            ["short"] = "Time at which the episode was created in the database",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "episode",
            ["short"] = "The code of the episode (e.g., S01E01)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "The id of the episode",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "name",
            ["short"] = "The name of the episode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["short"] = "Link to the episode's own URL endpoint",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "episode",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "episode",
                      ["orig"] = "episode",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/episode",
                ["parts"] = {
                  "episode",
                },
                ["select"] = {
                  ["exist"] = {
                    "episode",
                    "name",
                    "page",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/episode/{id}",
                ["parts"] = {
                  "episode",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["location"] = {
        ["fields"] = {
          {
            ["name"] = "created",
            ["short"] = "Time at which the location was created in the database",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "dimension",
            ["short"] = "The dimension in which the location is located",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "The id of the location",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "name",
            ["short"] = "The name of the location",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "residents",
            ["short"] = "List of characters who have been last seen in this location",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "type",
            ["short"] = "The type of the location",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["short"] = "Link to the location's own URL endpoint",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "location",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "dimension",
                      ["orig"] = "dimension",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "type",
                      ["orig"] = "type",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/location",
                ["parts"] = {
                  "location",
                },
                ["select"] = {
                  ["exist"] = {
                    "dimension",
                    "name",
                    "page",
                    "type",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/location/{id}",
                ["parts"] = {
                  "location",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
