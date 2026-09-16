

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { RickAndMortySDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('LocationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RICK_AND_MORTY_TEST_LIVE=TRUE.
  afterEach(liveDelay('RICK_AND_MORTY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = RickAndMortySDK.test()
    const ent = testsdk.Location()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RICK_AND_MORTY_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'location.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"created","req":false,"short":"Time at which the location was created in the database","type":"`$STRING`","index$":0},{"active":true,"name":"dimension","req":false,"short":"The dimension in which the location is located","type":"`$STRING`","index$":1},{"active":true,"name":"id","req":false,"short":"The id of the location","type":"`$INTEGER`","index$":2},{"active":true,"name":"name","req":false,"short":"The name of the location","type":"`$STRING`","index$":3},{"active":true,"name":"residents","req":false,"short":"List of characters who have been last seen in this location","type":"`$ARRAY`","index$":4},{"active":true,"name":"type","req":false,"short":"The type of the location","type":"`$STRING`","index$":5},{"active":true,"name":"url","req":false,"short":"Link to the location's own URL endpoint","type":"`$STRING`","index$":6}],"id":{"field":"id","name":"id"},"name":"location","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"dimension","orig":"dimension","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"name","orig":"name","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"query","name":"type","orig":"type","reqd":false,"type":"`$STRING`","index$":3}]},"contract":{"id":"GET /location","json":"{\"operationId\":\"getLocations\",\"parameters\":[{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Filter by location name\",\"in\":\"query\",\"name\":\"name\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by type\",\"in\":\"query\",\"name\":\"type\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by dimension\",\"in\":\"query\",\"name\":\"dimension\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"info\":{\"properties\":{\"count\":{\"description\":\"The length of the response\",\"type\":\"integer\"},\"next\":{\"description\":\"Link to the next page (if it exists)\",\"nullable\":true,\"type\":\"string\"},\"pages\":{\"description\":\"The amount of pages\",\"type\":\"integer\"},\"prev\":{\"description\":\"Link to the previous page (if it exists)\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"results\":{\"items\":{\"properties\":{\"created\":{\"description\":\"Time at which the location was created in the database\",\"format\":\"date-time\",\"type\":\"string\"},\"dimension\":{\"description\":\"The dimension in which the location is located\",\"type\":\"string\"},\"id\":{\"description\":\"The id of the location\",\"type\":\"integer\"},\"name\":{\"description\":\"The name of the location\",\"type\":\"string\"},\"residents\":{\"description\":\"List of characters who have been last seen in this location\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":{\"description\":\"The type of the location\",\"type\":\"string\"},\"url\":{\"description\":\"Link to the location's own URL endpoint\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"No locations found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/location","segments":[{"lit":"location"}],"select":{"exist":["dimension","name","page","type"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /location/{id}","json":"{\"operationId\":\"getLocationById\",\"parameters\":[{\"description\":\"Location ID or comma-separated list of IDs\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"created\":{\"description\":\"Time at which the location was created in the database\",\"format\":\"date-time\",\"type\":\"string\"},\"dimension\":{\"description\":\"The dimension in which the location is located\",\"type\":\"string\"},\"id\":{\"description\":\"The id of the location\",\"type\":\"integer\"},\"name\":{\"description\":\"The name of the location\",\"type\":\"string\"},\"residents\":{\"description\":\"List of characters who have been last seen in this location\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":{\"description\":\"The type of the location\",\"type\":\"string\"},\"url\":{\"description\":\"Link to the location's own URL endpoint\",\"type\":\"string\"}},\"type\":\"object\"},{\"items\":{\"properties\":{\"created\":{\"description\":\"Time at which the location was created in the database\",\"format\":\"date-time\",\"type\":\"string\"},\"dimension\":{\"description\":\"The dimension in which the location is located\",\"type\":\"string\"},\"id\":{\"description\":\"The id of the location\",\"type\":\"integer\"},\"name\":{\"description\":\"The name of the location\",\"type\":\"string\"},\"residents\":{\"description\":\"List of characters who have been last seen in this location\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":{\"description\":\"The type of the location\",\"type\":\"string\"},\"url\":{\"description\":\"Link to the location's own URL endpoint\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}]}}},\"description\":\"Successful response\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Location not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/location/{id}","segments":[{"lit":"location"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"location","name__orig":"location","Name":"Location","name_":"location","name-":"location","NAME":"LOCATION","index$":2}, {"active":true,"entity":"location","key$":"BasicLocationFlow","kind":"basic","name":"BasicLocationFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"location_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"location_ref01","srcdatavar":"location_ref01_data","suffix":"_dt0"},"match":{"id":"location01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-location_ref01"}}],"index$":1}]}, 'Location')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let location_ref01_data = Object.values(setup.data.existing.location)[0] as any

    // LIST
    const location_ref01_ent = client.Location()
    const location_ref01_match: any = {}

    const location_ref01_list = (await location_ref01_ent.list(location_ref01_match)).map((e: any) => e.data())


    // LOAD
    const location_ref01_match_dt0: any = {}
    location_ref01_match_dt0.id = location_ref01_data.id
    const location_ref01_data_dt0 = (await location_ref01_ent.load(location_ref01_match_dt0)).data()
    assert(location_ref01_data_dt0.id === location_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/location/LocationTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = RickAndMortySDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['location01','location02','location03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RICK_AND_MORTY_TEST_LOCATION_ENTID': idmap,
    'RICK_AND_MORTY_TEST_LIVE': 'FALSE',
    'RICK_AND_MORTY_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['RICK_AND_MORTY_TEST_LOCATION_ENTID']

  const live = 'TRUE' === env.RICK_AND_MORTY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RICK_AND_MORTY_TEST_LOCATION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new RickAndMortySDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.RICK_AND_MORTY_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
