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
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
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
            ["format"] = "date-time",
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
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
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
                ["segments"] = {
                  {
                    ["lit"] = "character",
                  },
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
                ["parts"] = {
                  "character",
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
                ["segments"] = {
                  {
                    ["lit"] = "character",
                  },
                  {
                    ["var"] = "id",
                  },
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
                ["parts"] = {
                  "character",
                  "{id}",
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
            ["format"] = "date-time",
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
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
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
                ["segments"] = {
                  {
                    ["lit"] = "episode",
                  },
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
                ["parts"] = {
                  "episode",
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
                ["segments"] = {
                  {
                    ["lit"] = "episode",
                  },
                  {
                    ["var"] = "id",
                  },
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
                ["parts"] = {
                  "episode",
                  "{id}",
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
            ["format"] = "date-time",
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
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
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
                ["segments"] = {
                  {
                    ["lit"] = "location",
                  },
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
                ["parts"] = {
                  "location",
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
                ["segments"] = {
                  {
                    ["lit"] = "location",
                  },
                  {
                    ["var"] = "id",
                  },
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
                ["parts"] = {
                  "location",
                  "{id}",
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
