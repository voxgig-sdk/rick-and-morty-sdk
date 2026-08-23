
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'RickAndMorty',
        slug: "rick-and-morty",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://rickandmortyapi.com/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      character: {
      },

      episode: {
      },

      location: {
      },

    }
  }


  entity = {
    "character": {
      "fields": [
        {
          "name": "created",
          "short": "Time at which the character was created in the database",
          "type": "`$STRING`"
        },
        {
          "name": "episode",
          "short": "List of episodes in which this character appeared",
          "type": "`$ARRAY`"
        },
        {
          "name": "gender",
          "short": "The gender of the character",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "The id of the character",
          "type": "`$INTEGER`"
        },
        {
          "name": "image",
          "short": "Link to the character's image",
          "type": "`$STRING`"
        },
        {
          "name": "location",
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "short": "The name of the character",
          "type": "`$STRING`"
        },
        {
          "name": "origin",
          "type": "`$OBJECT`"
        },
        {
          "name": "species",
          "short": "The species of the character",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "short": "The status of the character",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "short": "The type or subspecies of the character",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "Link to the character's own URL endpoint",
          "type": "`$STRING`"
        }
      ],
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
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "species",
                    "orig": "species",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/character",
              "parts": [
                "character"
              ],
              "select": {
                "exist": [
                  "gender",
                  "name",
                  "page",
                  "species",
                  "status",
                  "type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/character/{id}",
              "parts": [
                "character",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "episode": {
      "fields": [
        {
          "name": "air_date",
          "short": "The air date of the episode",
          "type": "`$STRING`"
        },
        {
          "name": "characters",
          "short": "List of characters who have been seen in this episode",
          "type": "`$ARRAY`"
        },
        {
          "name": "created",
          "short": "Time at which the episode was created in the database",
          "type": "`$STRING`"
        },
        {
          "name": "episode",
          "short": "The code of the episode (e.g., S01E01)",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "The id of the episode",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "short": "The name of the episode",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "Link to the episode's own URL endpoint",
          "type": "`$STRING`"
        }
      ],
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
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/episode",
              "parts": [
                "episode"
              ],
              "select": {
                "exist": [
                  "episode",
                  "name",
                  "page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/episode/{id}",
              "parts": [
                "episode",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "location": {
      "fields": [
        {
          "name": "created",
          "short": "Time at which the location was created in the database",
          "type": "`$STRING`"
        },
        {
          "name": "dimension",
          "short": "The dimension in which the location is located",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "The id of the location",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "short": "The name of the location",
          "type": "`$STRING`"
        },
        {
          "name": "residents",
          "short": "List of characters who have been last seen in this location",
          "type": "`$ARRAY`"
        },
        {
          "name": "type",
          "short": "The type of the location",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "Link to the location's own URL endpoint",
          "type": "`$STRING`"
        }
      ],
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
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/location",
              "parts": [
                "location"
              ],
              "select": {
                "exist": [
                  "dimension",
                  "name",
                  "page",
                  "type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/location/{id}",
              "parts": [
                "location",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

