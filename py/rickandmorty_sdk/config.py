# RickAndMorty SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "RickAndMorty",
            "slug": "rick-and-morty",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://rickandmortyapi.com/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "character": {},
                "episode": {},
                "location": {},
            },
        },
        "entity": {
      "character": {
        "fields": [
          {
            "name": "created",
            "title": "Created",
            "type": "`$STRING`",
            "short": "Time at which the character was created in the database",
            "format": "date-time",
          },
          {
            "name": "episode",
            "title": "Episode",
            "type": "`$ARRAY`",
            "short": "List of episodes in which this character appeared",
          },
          {
            "name": "gender",
            "title": "Gender",
            "type": "`$STRING`",
            "short": "The gender of the character",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "The id of the character",
          },
          {
            "name": "image",
            "title": "Image",
            "type": "`$STRING`",
            "short": "Link to the character's image",
          },
          {
            "name": "location",
            "title": "Location",
            "type": "`$OBJECT`",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "The name of the character",
          },
          {
            "name": "origin",
            "title": "Origin",
            "type": "`$OBJECT`",
          },
          {
            "name": "species",
            "title": "Species",
            "type": "`$STRING`",
            "short": "The species of the character",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "short": "The status of the character",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "short": "The type or subspecies of the character",
          },
          {
            "name": "url",
            "title": "Url",
            "type": "`$STRING`",
            "short": "Link to the character's own URL endpoint",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "character",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/character",
                "segments": [
                  {
                    "lit": "character",
                  },
                ],
                "parts": [
                  "character",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "gender",
                      "orig": "gender",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "species",
                      "orig": "species",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "status",
                      "orig": "status",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "gender",
                    "name",
                    "page",
                    "species",
                    "status",
                    "type",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/character/{id}",
                "segments": [
                  {
                    "lit": "character",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "character",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "episode": {
        "fields": [
          {
            "name": "air_date",
            "title": "Air Date",
            "type": "`$STRING`",
            "short": "The air date of the episode",
          },
          {
            "name": "characters",
            "title": "Characters",
            "type": "`$ARRAY`",
            "short": "List of characters who have been seen in this episode",
          },
          {
            "name": "created",
            "title": "Created",
            "type": "`$STRING`",
            "short": "Time at which the episode was created in the database",
            "format": "date-time",
          },
          {
            "name": "episode",
            "title": "Episode",
            "type": "`$STRING`",
            "short": "The code of the episode (e.g., S01E01)",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "The id of the episode",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "The name of the episode",
          },
          {
            "name": "url",
            "title": "Url",
            "type": "`$STRING`",
            "short": "Link to the episode's own URL endpoint",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "episode",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/episode",
                "segments": [
                  {
                    "lit": "episode",
                  },
                ],
                "parts": [
                  "episode",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "episode",
                      "orig": "episode",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "episode",
                    "name",
                    "page",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/episode/{id}",
                "segments": [
                  {
                    "lit": "episode",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "episode",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "location": {
        "fields": [
          {
            "name": "created",
            "title": "Created",
            "type": "`$STRING`",
            "short": "Time at which the location was created in the database",
            "format": "date-time",
          },
          {
            "name": "dimension",
            "title": "Dimension",
            "type": "`$STRING`",
            "short": "The dimension in which the location is located",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "The id of the location",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "The name of the location",
          },
          {
            "name": "residents",
            "title": "Residents",
            "type": "`$ARRAY`",
            "short": "List of characters who have been last seen in this location",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "short": "The type of the location",
          },
          {
            "name": "url",
            "title": "Url",
            "type": "`$STRING`",
            "short": "Link to the location's own URL endpoint",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "location",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/location",
                "segments": [
                  {
                    "lit": "location",
                  },
                ],
                "parts": [
                  "location",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "dimension",
                      "orig": "dimension",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "dimension",
                    "name",
                    "page",
                    "type",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/location/{id}",
                "segments": [
                  {
                    "lit": "location",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "location",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
