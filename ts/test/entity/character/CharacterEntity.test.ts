

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


describe('CharacterEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RICK_AND_MORTY_TEST_LIVE=TRUE.
  afterEach(liveDelay('RICK_AND_MORTY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = RickAndMortySDK.test()
    const ent = testsdk.Character()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RICK_AND_MORTY_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'character.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created":{"a":true,"fo":"date-time","h":"Created","n":"created","r":false,"sh":"Time at which the character was created in the database","t":"`$STRING`","key$":"created","index$":0},"episode":{"a":true,"h":"Episode","n":"episode","r":false,"sh":"List of episodes in which this character appeared","t":"`$ARRAY`","key$":"episode","index$":1},"gender":{"a":true,"h":"Gender","n":"gender","r":false,"sh":"The gender of the character","t":"`$STRING`","key$":"gender","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The id of the character","t":"`$INTEGER`","key$":"id","index$":3},"image":{"a":true,"h":"Image","n":"image","r":false,"sh":"Link to the character's image","t":"`$STRING`","key$":"image","index$":4},"location":{"a":true,"h":"Location","n":"location","r":false,"t":"`$OBJECT`","key$":"location","index$":5},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the character","t":"`$STRING`","key$":"name","index$":6},"origin":{"a":true,"h":"Origin","n":"origin","r":false,"t":"`$OBJECT`","key$":"origin","index$":7},"species":{"a":true,"h":"Species","n":"species","r":false,"sh":"The species of the character","t":"`$STRING`","key$":"species","index$":8},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"The status of the character","t":"`$STRING`","key$":"status","index$":9},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"The type or subspecies of the character","t":"`$STRING`","key$":"type","index$":10},"url":{"a":true,"h":"Url","n":"url","r":false,"sh":"Link to the character's own URL endpoint","t":"`$STRING`","key$":"url","index$":11}},"id":{"field":"id","name":"id"},"name":"character","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /character","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"gender","or":"gender","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"species","or":"species","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/character","q":{"exist":["gender","name","page","species","status","type"]},"r":{},"s":[{"lit":"character"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /character/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/character/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"character"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"character","name__orig":"character","Name":"Character","name_":"character","name-":"character","NAME":"CHARACTER","index$":0}, {"active":true,"entity":"character","key$":"BasicCharacterFlow","kind":"basic","name":"BasicCharacterFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"character_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"character_ref01","srcdatavar":"character_ref01_data","suffix":"_dt0"},"m":{"id":"character01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-character_ref01"}}],"index$":1}]}, 'Character', {"GET /character":{"protocol":"http","operationId":"getCharacters","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"info":{"key$":"info","properties":{"count":{"description":"The length of the response","type":"integer"},"next":{"description":"Link to the next page (if it exists)","nullable":true,"type":"string"},"pages":{"description":"The amount of pages","type":"integer"},"prev":{"description":"Link to the previous page (if it exists)","nullable":true,"type":"string"}},"type":"object","x-ref":"#/components/schemas/Info"},"results":{"items":{"properties":{"created":{"description":"Time at which the character was created in the database","format":"date-time","type":"string","key$":"created"},"episode":{"description":"List of episodes in which this character appeared","items":{"type":"string"},"type":"array","key$":"episode"},"gender":{"description":"The gender of the character","enum":["Female","Male","Genderless","unknown"],"type":"string","key$":"gender"},"id":{"description":"The id of the character","type":"integer","key$":"id"},"image":{"description":"Link to the character's image","type":"string","key$":"image"},"location":{"properties":{"name":{"description":"Name of the last known location","type":"string"},"url":{"description":"URL to the last known location","type":"string"}},"type":"object","key$":"location"},"name":{"description":"The name of the character","type":"string","key$":"name"},"origin":{"properties":{"name":{"description":"Name of the origin location","type":"string"},"url":{"description":"URL to the origin location","type":"string"}},"type":"object","key$":"origin"},"species":{"description":"The species of the character","type":"string","key$":"species"},"status":{"description":"The status of the character","enum":["Alive","Dead","unknown"],"type":"string","key$":"status"},"type":{"description":"The type or subspecies of the character","type":"string","key$":"type"},"url":{"description":"Link to the character's own URL endpoint","type":"string","key$":"url"}},"type":"object","x-ref":"#/components/schemas/Character","index$":0},"key$":"results","type":"array"}},"x-ref":"#/components/schemas/CharacterResponse"}}}},"404":{"description":"No characters found","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"page","in":"query","description":"Page number for pagination","required":false,"schema":{"type":"integer","minimum":1,"default":1},"index$":0},{"name":"name","in":"query","description":"Filter by character name","required":false,"schema":{"type":"string"},"index$":1},{"name":"status","in":"query","description":"Filter by status (alive, dead, or unknown)","required":false,"schema":{"type":"string","enum":["alive","dead","unknown"]},"index$":2},{"name":"species","in":"query","description":"Filter by species","required":false,"schema":{"type":"string"},"index$":3},{"name":"type","in":"query","description":"Filter by type","required":false,"schema":{"type":"string"},"index$":4},{"name":"gender","in":"query","description":"Filter by gender","required":false,"schema":{"type":"string","enum":["female","male","genderless","unknown"]},"index$":5}],"securitySource":"unspecified"},"GET /character/{id}":{"protocol":"http","operationId":"getCharacterById","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"oneOf":[{"type":"object","properties":{"id":{"description":"The id of the character","type":"integer"},"name":{"description":"The name of the character","type":"string"},"status":{"description":"The status of the character","enum":["Alive","Dead","unknown"],"type":"string"},"species":{"description":"The species of the character","type":"string"},"type":{"description":"The type or subspecies of the character","type":"string"},"gender":{"description":"The gender of the character","enum":["Female","Male","Genderless","unknown"],"type":"string"},"origin":{"properties":{"name":{"description":"Name of the origin location","type":"string"},"url":{"description":"URL to the origin location","type":"string"}},"type":"object"},"location":{"properties":{"name":{"description":"Name of the last known location","type":"string"},"url":{"description":"URL to the last known location","type":"string"}},"type":"object"},"image":{"description":"Link to the character's image","type":"string"},"episode":{"description":"List of episodes in which this character appeared","items":{"type":"string"},"type":"array"},"url":{"description":"Link to the character's own URL endpoint","type":"string"},"created":{"description":"Time at which the character was created in the database","format":"date-time","type":"string"}},"x-ref":"#/components/schemas/Character"},{"type":"array","items":{"type":"object","properties":{"id":{"description":"The id of the character","type":"integer"},"name":{"description":"The name of the character","type":"string"},"status":{"description":"The status of the character","enum":["Alive","Dead","unknown"],"type":"string"},"species":{"description":"The species of the character","type":"string"},"type":{"description":"The type or subspecies of the character","type":"string"},"gender":{"description":"The gender of the character","enum":["Female","Male","Genderless","unknown"],"type":"string"},"origin":{"properties":{"name":{"description":"Name of the origin location","type":"string"},"url":{"description":"URL to the origin location","type":"string"}},"type":"object"},"location":{"properties":{"name":{"description":"Name of the last known location","type":"string"},"url":{"description":"URL to the last known location","type":"string"}},"type":"object"},"image":{"description":"Link to the character's image","type":"string"},"episode":{"description":"List of episodes in which this character appeared","items":{"type":"string"},"type":"array"},"url":{"description":"Link to the character's own URL endpoint","type":"string"},"created":{"description":"Time at which the character was created in the database","format":"date-time","type":"string"}},"x-ref":"#/components/schemas/Character"}}]}}}},"404":{"description":"Character not found","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"id","in":"path","description":"Character ID or comma-separated list of IDs","required":true,"schema":{"type":"string"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let character_ref01_data = Object.values(setup.data.existing.character)[0] as any

    // LIST
    const character_ref01_ent = client.Character()
    const character_ref01_match: any = {}

    const character_ref01_list = (await character_ref01_ent.list(character_ref01_match)).map((e: any) => e.data())


    // LOAD
    const character_ref01_match_dt0: any = {}
    character_ref01_match_dt0.id = character_ref01_data.id
    const character_ref01_data_dt0 = (await character_ref01_ent.load(character_ref01_match_dt0)).data()
    assert(character_ref01_data_dt0.id === character_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/character/CharacterTestData.json')

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
    ['character01','character02','character03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RICK_AND_MORTY_TEST_CHARACTER_ENTID': idmap,
    'RICK_AND_MORTY_TEST_LIVE': 'FALSE',
    'RICK_AND_MORTY_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['RICK_AND_MORTY_TEST_CHARACTER_ENTID']

  const live = 'TRUE' === env.RICK_AND_MORTY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RICK_AND_MORTY_TEST_CHARACTER_ENTID']
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
  
