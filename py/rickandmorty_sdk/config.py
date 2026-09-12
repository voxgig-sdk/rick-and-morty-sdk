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
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
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
            "format": "date-time",
            "name": "created",
            "short": "Time at which the character was created in the database",
            "type": "`$STRING`",
          },
          {
            "name": "episode",
            "short": "List of episodes in which this character appeared",
            "type": "`$ARRAY`",
          },
          {
            "name": "gender",
            "short": "The gender of the character",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "The id of the character",
            "type": "`$INTEGER`",
          },
          {
            "name": "image",
            "short": "Link to the character's image",
            "type": "`$STRING`",
          },
          {
            "name": "location",
            "type": "`$OBJECT`",
          },
          {
            "name": "name",
            "short": "The name of the character",
            "type": "`$STRING`",
          },
          {
            "name": "origin",
            "type": "`$OBJECT`",
          },
          {
            "name": "species",
            "short": "The species of the character",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "short": "The status of the character",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "short": "The type or subspecies of the character",
            "type": "`$STRING`",
          },
          {
            "name": "url",
            "short": "Link to the character's own URL endpoint",
            "type": "`$STRING`",
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
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "gender",
                      "orig": "gender",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "species",
                      "orig": "species",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "status",
                      "orig": "status",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/character",
                "segments": [
                  {
                    "lit": "character",
                  },
                ],
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
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "character",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "character",
                  "{id}",
                ],
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
            "short": "The air date of the episode",
            "type": "`$STRING`",
          },
          {
            "name": "characters",
            "short": "List of characters who have been seen in this episode",
            "type": "`$ARRAY`",
          },
          {
            "format": "date-time",
            "name": "created",
            "short": "Time at which the episode was created in the database",
            "type": "`$STRING`",
          },
          {
            "name": "episode",
            "short": "The code of the episode (e.g., S01E01)",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "The id of the episode",
            "type": "`$INTEGER`",
          },
          {
            "name": "name",
            "short": "The name of the episode",
            "type": "`$STRING`",
          },
          {
            "name": "url",
            "short": "Link to the episode's own URL endpoint",
            "type": "`$STRING`",
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
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "episode",
                      "orig": "episode",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/episode",
                "segments": [
                  {
                    "lit": "episode",
                  },
                ],
                "select": {
                  "exist": [
                    "episode",
                    "name",
                    "page",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "episode",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "episode",
                  "{id}",
                ],
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
            "format": "date-time",
            "name": "created",
            "short": "Time at which the location was created in the database",
            "type": "`$STRING`",
          },
          {
            "name": "dimension",
            "short": "The dimension in which the location is located",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "The id of the location",
            "type": "`$INTEGER`",
          },
          {
            "name": "name",
            "short": "The name of the location",
            "type": "`$STRING`",
          },
          {
            "name": "residents",
            "short": "List of characters who have been last seen in this location",
            "type": "`$ARRAY`",
          },
          {
            "name": "type",
            "short": "The type of the location",
            "type": "`$STRING`",
          },
          {
            "name": "url",
            "short": "Link to the location's own URL endpoint",
            "type": "`$STRING`",
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
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "dimension",
                      "orig": "dimension",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/location",
                "segments": [
                  {
                    "lit": "location",
                  },
                ],
                "select": {
                  "exist": [
                    "dimension",
                    "name",
                    "page",
                    "type",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "location",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "location",
                  "{id}",
                ],
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
