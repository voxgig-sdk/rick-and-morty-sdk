

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"created","req":false,"short":"Time at which the character was created in the database","type":"`$STRING`","index$":0},{"active":true,"name":"episode","req":false,"short":"List of episodes in which this character appeared","type":"`$ARRAY`","index$":1},{"active":true,"name":"gender","req":false,"short":"The gender of the character","type":"`$STRING`","index$":2},{"active":true,"name":"id","req":false,"short":"The id of the character","type":"`$INTEGER`","index$":3},{"active":true,"name":"image","req":false,"short":"Link to the character's image","type":"`$STRING`","index$":4},{"active":true,"name":"location","req":false,"type":"`$OBJECT`","index$":5},{"active":true,"name":"name","req":false,"short":"The name of the character","type":"`$STRING`","index$":6},{"active":true,"name":"origin","req":false,"type":"`$OBJECT`","index$":7},{"active":true,"name":"species","req":false,"short":"The species of the character","type":"`$STRING`","index$":8},{"active":true,"name":"status","req":false,"short":"The status of the character","type":"`$STRING`","index$":9},{"active":true,"name":"type","req":false,"short":"The type or subspecies of the character","type":"`$STRING`","index$":10},{"active":true,"name":"url","req":false,"short":"Link to the character's own URL endpoint","type":"`$STRING`","index$":11}],"id":{"field":"id","name":"id"},"name":"character","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"gender","orig":"gender","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"name","orig":"name","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"query","name":"species","orig":"species","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"status","orig":"status","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"type","orig":"type","reqd":false,"type":"`$STRING`","index$":5}]},"contract":{"id":"GET /character","json":"{\"operationId\":\"getCharacters\",\"parameters\":[{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Filter by character name\",\"in\":\"query\",\"name\":\"name\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by status (alive, dead, or unknown)\",\"in\":\"query\",\"name\":\"status\",\"required\":false,\"schema\":{\"enum\":[\"alive\",\"dead\",\"unknown\"],\"type\":\"string\"}},{\"description\":\"Filter by species\",\"in\":\"query\",\"name\":\"species\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by type\",\"in\":\"query\",\"name\":\"type\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by gender\",\"in\":\"query\",\"name\":\"gender\",\"required\":false,\"schema\":{\"enum\":[\"female\",\"male\",\"genderless\",\"unknown\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"info\":{\"properties\":{\"count\":{\"description\":\"The length of the response\",\"type\":\"integer\"},\"next\":{\"description\":\"Link to the next page (if it exists)\",\"nullable\":true,\"type\":\"string\"},\"pages\":{\"description\":\"The amount of pages\",\"type\":\"integer\"},\"prev\":{\"description\":\"Link to the previous page (if it exists)\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"results\":{\"items\":{\"properties\":{\"created\":{\"description\":\"Time at which the character was created in the database\",\"format\":\"date-time\",\"type\":\"string\"},\"episode\":{\"description\":\"List of episodes in which this character appeared\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"gender\":{\"description\":\"The gender of the character\",\"enum\":[\"Female\",\"Male\",\"Genderless\",\"unknown\"],\"type\":\"string\"},\"id\":{\"description\":\"The id of the character\",\"type\":\"integer\"},\"image\":{\"description\":\"Link to the character's image\",\"type\":\"string\"},\"location\":{\"properties\":{\"name\":{\"description\":\"Name of the last known location\",\"type\":\"string\"},\"url\":{\"description\":\"URL to the last known location\",\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"description\":\"The name of the character\",\"type\":\"string\"},\"origin\":{\"properties\":{\"name\":{\"description\":\"Name of the origin location\",\"type\":\"string\"},\"url\":{\"description\":\"URL to the origin location\",\"type\":\"string\"}},\"type\":\"object\"},\"species\":{\"description\":\"The species of the character\",\"type\":\"string\"},\"status\":{\"description\":\"The status of the character\",\"enum\":[\"Alive\",\"Dead\",\"unknown\"],\"type\":\"string\"},\"type\":{\"description\":\"The type or subspecies of the character\",\"type\":\"string\"},\"url\":{\"description\":\"Link to the character's own URL endpoint\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"No characters found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/character","segments":[{"lit":"character"}],"select":{"exist":["gender","name","page","species","status","type"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /character/{id}","json":"{\"operationId\":\"getCharacterById\",\"parameters\":[{\"description\":\"Character ID or comma-separated list of IDs\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"created\":{\"description\":\"Time at which the character was created in the database\",\"format\":\"date-time\",\"type\":\"string\"},\"episode\":{\"description\":\"List of episodes in which this character appeared\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"gender\":{\"description\":\"The gender of the character\",\"enum\":[\"Female\",\"Male\",\"Genderless\",\"unknown\"],\"type\":\"string\"},\"id\":{\"description\":\"The id of the character\",\"type\":\"integer\"},\"image\":{\"description\":\"Link to the character's image\",\"type\":\"string\"},\"location\":{\"properties\":{\"name\":{\"description\":\"Name of the last known location\",\"type\":\"string\"},\"url\":{\"description\":\"URL to the last known location\",\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"description\":\"The name of the character\",\"type\":\"string\"},\"origin\":{\"properties\":{\"name\":{\"description\":\"Name of the origin location\",\"type\":\"string\"},\"url\":{\"description\":\"URL to the origin location\",\"type\":\"string\"}},\"type\":\"object\"},\"species\":{\"description\":\"The species of the character\",\"type\":\"string\"},\"status\":{\"description\":\"The status of the character\",\"enum\":[\"Alive\",\"Dead\",\"unknown\"],\"type\":\"string\"},\"type\":{\"description\":\"The type or subspecies of the character\",\"type\":\"string\"},\"url\":{\"description\":\"Link to the character's own URL endpoint\",\"type\":\"string\"}},\"type\":\"object\"},{\"items\":{\"properties\":{\"created\":{\"description\":\"Time at which the character was created in the database\",\"format\":\"date-time\",\"type\":\"string\"},\"episode\":{\"description\":\"List of episodes in which this character appeared\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"gender\":{\"description\":\"The gender of the character\",\"enum\":[\"Female\",\"Male\",\"Genderless\",\"unknown\"],\"type\":\"string\"},\"id\":{\"description\":\"The id of the character\",\"type\":\"integer\"},\"image\":{\"description\":\"Link to the character's image\",\"type\":\"string\"},\"location\":{\"properties\":{\"name\":{\"description\":\"Name of the last known location\",\"type\":\"string\"},\"url\":{\"description\":\"URL to the last known location\",\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"description\":\"The name of the character\",\"type\":\"string\"},\"origin\":{\"properties\":{\"name\":{\"description\":\"Name of the origin location\",\"type\":\"string\"},\"url\":{\"description\":\"URL to the origin location\",\"type\":\"string\"}},\"type\":\"object\"},\"species\":{\"description\":\"The species of the character\",\"type\":\"string\"},\"status\":{\"description\":\"The status of the character\",\"enum\":[\"Alive\",\"Dead\",\"unknown\"],\"type\":\"string\"},\"type\":{\"description\":\"The type or subspecies of the character\",\"type\":\"string\"},\"url\":{\"description\":\"Link to the character's own URL endpoint\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}]}}},\"description\":\"Successful response\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Character not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/character/{id}","segments":[{"lit":"character"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"character","name__orig":"character","Name":"Character","name_":"character","name-":"character","NAME":"CHARACTER","index$":0}, {"active":true,"entity":"character","key$":"BasicCharacterFlow","kind":"basic","name":"BasicCharacterFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"character_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"character_ref01","srcdatavar":"character_ref01_data","suffix":"_dt0"},"match":{"id":"character01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-character_ref01"}}],"index$":1}]}, 'Character')
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
  
