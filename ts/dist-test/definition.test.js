"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
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
            "page": 1,
            "species": "v1",
            "status": "v1",
            "type": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "page",
            "name",
            "status",
            "species",
            "type",
            "gender"
        ],
        "queryArgs": [
            {
                "name": "gender",
                "wire": "gender"
            },
            {
                "name": "name",
                "wire": "name"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "species",
                "wire": "species"
            },
            {
                "name": "status",
                "wire": "status"
            },
            {
                "name": "type",
                "wire": "type"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "info": {
                "count": 1,
                "pages": 1,
                "next": "x",
                "prev": "x"
            },
            "results": [
                {
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
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
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
            "page": 1
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "page",
            "name",
            "episode"
        ],
        "queryArgs": [
            {
                "name": "episode",
                "wire": "episode"
            },
            {
                "name": "name",
                "wire": "name"
            },
            {
                "name": "page",
                "wire": "page"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "info": {
                "count": 1,
                "pages": 1,
                "next": "x",
                "prev": "x"
            },
            "results": [
                {
                    "id": 1,
                    "name": "x",
                    "air_date": "x",
                    "episode": "x",
                    "characters": [
                        "x"
                    ],
                    "url": "x",
                    "created": "2026-01-01T00:00:00Z"
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
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
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
            "page": 1,
            "type": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "page",
            "name",
            "type",
            "dimension"
        ],
        "queryArgs": [
            {
                "name": "dimension",
                "wire": "dimension"
            },
            {
                "name": "name",
                "wire": "name"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "type",
                "wire": "type"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "info": {
                "count": 1,
                "pages": 1,
                "next": "x",
                "prev": "x"
            },
            "results": [
                {
                    "id": 1,
                    "name": "x",
                    "type": "x",
                    "dimension": "x",
                    "residents": [
                        "x"
                    ],
                    "url": "x",
                    "created": "2026-01-01T00:00:00Z"
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
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
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
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map