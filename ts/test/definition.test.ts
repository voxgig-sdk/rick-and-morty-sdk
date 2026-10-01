import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "character",
    "accessor": "Character",
    "op": "list",
    "method": "GET",
    "path": "/character",
    "args": [],
    "select": {
      "gender": "v1",
      "name": "v1",
      "page": "v1",
      "species": "v1",
      "status": "v1",
      "type": "v1"
    },
    "headers": [],
    "query": [
      "page",
      "name",
      "status",
      "species",
      "type",
      "gender"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "info": {
        "count": 1,
        "next": "x",
        "pages": 1,
        "prev": "x"
      },
      "results": [
        {
          "created": "2026-01-01T00:00:00Z",
          "episode": [
            "x"
          ],
          "gender": "Female",
          "id": 1,
          "image": "x",
          "location": {
            "name": "x",
            "url": "x"
          },
          "name": "x",
          "origin": {
            "name": "x",
            "url": "x"
          },
          "species": "x",
          "status": "Alive",
          "type": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "character",
    "accessor": "Character",
    "op": "load",
    "method": "GET",
    "path": "/character/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "status": "Alive",
      "species": "x",
      "type": "x",
      "gender": "Female",
      "origin": {
        "name": "x",
        "url": "x"
      },
      "location": {
        "name": "x",
        "url": "x"
      },
      "image": "x",
      "episode": [
        "x"
      ],
      "url": "x",
      "created": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "episode",
    "accessor": "Episode",
    "op": "list",
    "method": "GET",
    "path": "/episode",
    "args": [],
    "select": {
      "episode": "v1",
      "name": "v1",
      "page": "v1"
    },
    "headers": [],
    "query": [
      "page",
      "name",
      "episode"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "info": {
        "count": 1,
        "next": "x",
        "pages": 1,
        "prev": "x"
      },
      "results": [
        {
          "air_date": "x",
          "characters": [
            "x"
          ],
          "created": "2026-01-01T00:00:00Z",
          "episode": "x",
          "id": 1,
          "name": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "episode",
    "accessor": "Episode",
    "op": "load",
    "method": "GET",
    "path": "/episode/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "air_date": "x",
      "episode": "x",
      "characters": [
        "x"
      ],
      "url": "x",
      "created": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "location",
    "accessor": "Location",
    "op": "list",
    "method": "GET",
    "path": "/location",
    "args": [],
    "select": {
      "dimension": "v1",
      "name": "v1",
      "page": "v1",
      "type": "v1"
    },
    "headers": [],
    "query": [
      "page",
      "name",
      "type",
      "dimension"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "info": {
        "count": 1,
        "next": "x",
        "pages": 1,
        "prev": "x"
      },
      "results": [
        {
          "created": "2026-01-01T00:00:00Z",
          "dimension": "x",
          "id": 1,
          "name": "x",
          "residents": [
            "x"
          ],
          "type": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "location",
    "accessor": "Location",
    "op": "load",
    "method": "GET",
    "path": "/location/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "type": "x",
      "dimension": "x",
      "residents": [
        "x"
      ],
      "url": "x",
      "created": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
