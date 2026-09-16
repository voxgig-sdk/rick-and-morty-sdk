

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


describe('EpisodeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RICK_AND_MORTY_TEST_LIVE=TRUE.
  afterEach(liveDelay('RICK_AND_MORTY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = RickAndMortySDK.test()
    const ent = testsdk.Episode()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RICK_AND_MORTY_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'episode.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"air_date","req":false,"short":"The air date of the episode","type":"`$STRING`","index$":0},{"active":true,"name":"characters","req":false,"short":"List of characters who have been seen in this episode","type":"`$ARRAY`","index$":1},{"active":true,"format":"date-time","name":"created","req":false,"short":"Time at which the episode was created in the database","type":"`$STRING`","index$":2},{"active":true,"name":"episode","req":false,"short":"The code of the episode (e.g., S01E01)","type":"`$STRING`","index$":3},{"active":true,"name":"id","req":false,"short":"The id of the episode","type":"`$INTEGER`","index$":4},{"active":true,"name":"name","req":false,"short":"The name of the episode","type":"`$STRING`","index$":5},{"active":true,"name":"url","req":false,"short":"Link to the episode's own URL endpoint","type":"`$STRING`","index$":6}],"id":{"field":"id","name":"id"},"name":"episode","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"episode","orig":"episode","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"name","orig":"name","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":2}]},"contract":{"id":"GET /episode","json":"{\"operationId\":\"getEpisodes\",\"parameters\":[{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Filter by episode name\",\"in\":\"query\",\"name\":\"name\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by episode code (e.g., S01E01)\",\"in\":\"query\",\"name\":\"episode\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"info\":{\"properties\":{\"count\":{\"description\":\"The length of the response\",\"type\":\"integer\"},\"next\":{\"description\":\"Link to the next page (if it exists)\",\"nullable\":true,\"type\":\"string\"},\"pages\":{\"description\":\"The amount of pages\",\"type\":\"integer\"},\"prev\":{\"description\":\"Link to the previous page (if it exists)\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"results\":{\"items\":{\"properties\":{\"air_date\":{\"description\":\"The air date of the episode\",\"type\":\"string\"},\"characters\":{\"description\":\"List of characters who have been seen in this episode\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"created\":{\"description\":\"Time at which the episode was created in the database\",\"format\":\"date-time\",\"type\":\"string\"},\"episode\":{\"description\":\"The code of the episode (e.g., S01E01)\",\"type\":\"string\"},\"id\":{\"description\":\"The id of the episode\",\"type\":\"integer\"},\"name\":{\"description\":\"The name of the episode\",\"type\":\"string\"},\"url\":{\"description\":\"Link to the episode's own URL endpoint\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"No episodes found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/episode","segments":[{"lit":"episode"}],"select":{"exist":["episode","name","page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /episode/{id}","json":"{\"operationId\":\"getEpisodeById\",\"parameters\":[{\"description\":\"Episode ID or comma-separated list of IDs\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"air_date\":{\"description\":\"The air date of the episode\",\"type\":\"string\"},\"characters\":{\"description\":\"List of characters who have been seen in this episode\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"created\":{\"description\":\"Time at which the episode was created in the database\",\"format\":\"date-time\",\"type\":\"string\"},\"episode\":{\"description\":\"The code of the episode (e.g., S01E01)\",\"type\":\"string\"},\"id\":{\"description\":\"The id of the episode\",\"type\":\"integer\"},\"name\":{\"description\":\"The name of the episode\",\"type\":\"string\"},\"url\":{\"description\":\"Link to the episode's own URL endpoint\",\"type\":\"string\"}},\"type\":\"object\"},{\"items\":{\"properties\":{\"air_date\":{\"description\":\"The air date of the episode\",\"type\":\"string\"},\"characters\":{\"description\":\"List of characters who have been seen in this episode\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"created\":{\"description\":\"Time at which the episode was created in the database\",\"format\":\"date-time\",\"type\":\"string\"},\"episode\":{\"description\":\"The code of the episode (e.g., S01E01)\",\"type\":\"string\"},\"id\":{\"description\":\"The id of the episode\",\"type\":\"integer\"},\"name\":{\"description\":\"The name of the episode\",\"type\":\"string\"},\"url\":{\"description\":\"Link to the episode's own URL endpoint\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}]}}},\"description\":\"Successful response\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Episode not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/episode/{id}","segments":[{"lit":"episode"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"episode","name__orig":"episode","Name":"Episode","name_":"episode","name-":"episode","NAME":"EPISODE","index$":1}, {"active":true,"entity":"episode","key$":"BasicEpisodeFlow","kind":"basic","name":"BasicEpisodeFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"episode_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"episode_ref01","srcdatavar":"episode_ref01_data","suffix":"_dt0"},"match":{"id":"episode01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-episode_ref01"}}],"index$":1}]}, 'Episode')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let episode_ref01_data = Object.values(setup.data.existing.episode)[0] as any

    // LIST
    const episode_ref01_ent = client.Episode()
    const episode_ref01_match: any = {}

    const episode_ref01_list = (await episode_ref01_ent.list(episode_ref01_match)).map((e: any) => e.data())


    // LOAD
    const episode_ref01_match_dt0: any = {}
    episode_ref01_match_dt0.id = episode_ref01_data.id
    const episode_ref01_data_dt0 = (await episode_ref01_ent.load(episode_ref01_match_dt0)).data()
    assert(episode_ref01_data_dt0.id === episode_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/episode/EpisodeTestData.json')

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
    ['episode01','episode02','episode03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RICK_AND_MORTY_TEST_EPISODE_ENTID': idmap,
    'RICK_AND_MORTY_TEST_LIVE': 'FALSE',
    'RICK_AND_MORTY_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['RICK_AND_MORTY_TEST_EPISODE_ENTID']

  const live = 'TRUE' === env.RICK_AND_MORTY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RICK_AND_MORTY_TEST_EPISODE_ENTID']
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
  
