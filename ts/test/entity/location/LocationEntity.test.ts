

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created":{"a":true,"fo":"date-time","h":"Created","n":"created","r":false,"sh":"Time at which the location was created in the database","t":"`$STRING`","key$":"created","index$":0},"dimension":{"a":true,"h":"Dimension","n":"dimension","r":false,"sh":"The dimension in which the location is located","t":"`$STRING`","key$":"dimension","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The id of the location","t":"`$INTEGER`","key$":"id","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the location","t":"`$STRING`","key$":"name","index$":3},"residents":{"a":true,"h":"Residents","n":"residents","r":false,"sh":"List of characters who have been last seen in this location","t":"`$ARRAY`","key$":"residents","index$":4},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"The type of the location","t":"`$STRING`","key$":"type","index$":5},"url":{"a":true,"h":"Url","n":"url","r":false,"sh":"Link to the location's own URL endpoint","t":"`$STRING`","key$":"url","index$":6}},"id":{"field":"id","name":"id"},"name":"location","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /location","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"dimension","or":"dimension","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/location","q":{"exist":["dimension","name","page","type"]},"r":{},"s":[{"lit":"location"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /location/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/location/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"location"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"location","name__orig":"location","Name":"Location","name_":"location","name-":"location","NAME":"LOCATION","index$":2}, {"active":true,"entity":"location","key$":"BasicLocationFlow","kind":"basic","name":"BasicLocationFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"location_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"location_ref01","srcdatavar":"location_ref01_data","suffix":"_dt0"},"m":{"id":"location01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-location_ref01"}}],"index$":1}]}, 'Location', {"GET /location":{"protocol":"http","operationId":"getLocations","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"info":{"key$":"info","properties":{"count":{"description":"The length of the response","type":"integer"},"next":{"description":"Link to the next page (if it exists)","nullable":true,"type":"string"},"pages":{"description":"The amount of pages","type":"integer"},"prev":{"description":"Link to the previous page (if it exists)","nullable":true,"type":"string"}},"type":"object","x-ref":"#/components/schemas/Info"},"results":{"items":{"properties":{"created":{"description":"Time at which the location was created in the database","format":"date-time","type":"string","key$":"created"},"dimension":{"description":"The dimension in which the location is located","type":"string","key$":"dimension"},"id":{"description":"The id of the location","type":"integer","key$":"id"},"name":{"description":"The name of the location","type":"string","key$":"name"},"residents":{"description":"List of characters who have been last seen in this location","items":{"type":"string"},"type":"array","key$":"residents"},"type":{"description":"The type of the location","type":"string","key$":"type"},"url":{"description":"Link to the location's own URL endpoint","type":"string","key$":"url"}},"type":"object","x-ref":"#/components/schemas/Location","index$":0},"key$":"results","type":"array"}},"x-ref":"#/components/schemas/LocationResponse"}}}},"404":{"description":"No locations found","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"page","in":"query","description":"Page number for pagination","required":false,"schema":{"type":"integer","minimum":1,"default":1},"index$":0},{"name":"name","in":"query","description":"Filter by location name","required":false,"schema":{"type":"string"},"index$":1},{"name":"type","in":"query","description":"Filter by type","required":false,"schema":{"type":"string"},"index$":2},{"name":"dimension","in":"query","description":"Filter by dimension","required":false,"schema":{"type":"string"},"index$":3}],"securitySource":"unspecified"},"GET /location/{id}":{"protocol":"http","operationId":"getLocationById","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"oneOf":[{"type":"object","properties":{"id":{"description":"The id of the location","type":"integer"},"name":{"description":"The name of the location","type":"string"},"type":{"description":"The type of the location","type":"string"},"dimension":{"description":"The dimension in which the location is located","type":"string"},"residents":{"description":"List of characters who have been last seen in this location","items":{"type":"string"},"type":"array"},"url":{"description":"Link to the location's own URL endpoint","type":"string"},"created":{"description":"Time at which the location was created in the database","format":"date-time","type":"string"}},"x-ref":"#/components/schemas/Location"},{"type":"array","items":{"type":"object","properties":{"id":{"description":"The id of the location","type":"integer"},"name":{"description":"The name of the location","type":"string"},"type":{"description":"The type of the location","type":"string"},"dimension":{"description":"The dimension in which the location is located","type":"string"},"residents":{"description":"List of characters who have been last seen in this location","items":{"type":"string"},"type":"array"},"url":{"description":"Link to the location's own URL endpoint","type":"string"},"created":{"description":"Time at which the location was created in the database","format":"date-time","type":"string"}},"x-ref":"#/components/schemas/Location"}}]}}}},"404":{"description":"Location not found","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"id","in":"path","description":"Location ID or comma-separated list of IDs","required":true,"schema":{"type":"string"},"index$":0}],"securitySource":"unspecified"}})
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
  
