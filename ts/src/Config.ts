
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
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
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
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
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
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
          "title": "Created",
          "type": "`$STRING`",
          "short": "Time at which the character was created in the database",
          "format": "date-time"
        },
        {
          "name": "episode",
          "title": "Episode",
          "type": "`$ARRAY`",
          "short": "List of episodes in which this character appeared"
        },
        {
          "name": "gender",
          "title": "Gender",
          "type": "`$STRING`",
          "short": "The gender of the character"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "short": "The id of the character"
        },
        {
          "name": "image",
          "title": "Image",
          "type": "`$STRING`",
          "short": "Link to the character's image"
        },
        {
          "name": "location",
          "title": "Location",
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "The name of the character"
        },
        {
          "name": "origin",
          "title": "Origin",
          "type": "`$OBJECT`"
        },
        {
          "name": "species",
          "title": "Species",
          "type": "`$STRING`",
          "short": "The species of the character"
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "The status of the character"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "short": "The type or subspecies of the character"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "Link to the character's own URL endpoint"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
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
                  "lit": "character"
                }
              ],
              "parts": [
                "character"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "gender",
                    "orig": "gender",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "species",
                    "orig": "species",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "gender",
                  "name",
                  "page",
                  "species",
                  "status",
                  "type"
                ]
              }
            }
          ]
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
                  "lit": "character"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "character",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
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
          "title": "Air Date",
          "type": "`$STRING`",
          "short": "The air date of the episode"
        },
        {
          "name": "characters",
          "title": "Characters",
          "type": "`$ARRAY`",
          "short": "List of characters who have been seen in this episode"
        },
        {
          "name": "created",
          "title": "Created",
          "type": "`$STRING`",
          "short": "Time at which the episode was created in the database",
          "format": "date-time"
        },
        {
          "name": "episode",
          "title": "Episode",
          "type": "`$STRING`",
          "short": "The code of the episode (e.g., S01E01)"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "short": "The id of the episode"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "The name of the episode"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "Link to the episode's own URL endpoint"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
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
                  "lit": "episode"
                }
              ],
              "parts": [
                "episode"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "episode",
                    "orig": "episode",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  }
                ]
              },
              "select": {
                "exist": [
                  "episode",
                  "name",
                  "page"
                ]
              }
            }
          ]
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
                  "lit": "episode"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "episode",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
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
          "title": "Created",
          "type": "`$STRING`",
          "short": "Time at which the location was created in the database",
          "format": "date-time"
        },
        {
          "name": "dimension",
          "title": "Dimension",
          "type": "`$STRING`",
          "short": "The dimension in which the location is located"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "short": "The id of the location"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "The name of the location"
        },
        {
          "name": "residents",
          "title": "Residents",
          "type": "`$ARRAY`",
          "short": "List of characters who have been last seen in this location"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "short": "The type of the location"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "Link to the location's own URL endpoint"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
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
                  "lit": "location"
                }
              ],
              "parts": [
                "location"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "dimension",
                    "orig": "dimension",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "dimension",
                  "name",
                  "page",
                  "type"
                ]
              }
            }
          ]
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
                  "lit": "location"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "location",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
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
  config,
  FEATURE_PLUGINS,
}

