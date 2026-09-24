

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"air_date":{"a":true,"h":"Air Date","n":"air_date","r":false,"sh":"The air date of the episode","t":"`$STRING`","key$":"air_date","index$":0},"characters":{"a":true,"h":"Characters","n":"characters","r":false,"sh":"List of characters who have been seen in this episode","t":"`$ARRAY`","key$":"characters","index$":1},"created":{"a":true,"fo":"date-time","h":"Created","n":"created","r":false,"sh":"Time at which the episode was created in the database","t":"`$STRING`","key$":"created","index$":2},"episode":{"a":true,"h":"Episode","n":"episode","r":false,"sh":"The code of the episode (e.g., S01E01)","t":"`$STRING`","key$":"episode","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The id of the episode","t":"`$INTEGER`","key$":"id","index$":4},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the episode","t":"`$STRING`","key$":"name","index$":5},"url":{"a":true,"h":"Url","n":"url","r":false,"sh":"Link to the episode's own URL endpoint","t":"`$STRING`","key$":"url","index$":6}},"id":{"field":"id","name":"id"},"name":"episode","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /episode","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"episode","or":"episode","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/episode","q":{"exist":["episode","name","page"]},"r":{},"s":[{"lit":"episode"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /episode/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/episode/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"episode"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"episode","name__orig":"episode","Name":"Episode","name_":"episode","name-":"episode","NAME":"EPISODE","index$":1}, {"active":true,"entity":"episode","key$":"BasicEpisodeFlow","kind":"basic","name":"BasicEpisodeFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"episode_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"episode_ref01","srcdatavar":"episode_ref01_data","suffix":"_dt0"},"m":{"id":"episode01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-episode_ref01"}}],"index$":1}]}, 'Episode', {"GET /episode":{"protocol":"http","operationId":"getEpisodes","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"info":{"key$":"info","properties":{"count":{"description":"The length of the response","type":"integer"},"next":{"description":"Link to the next page (if it exists)","nullable":true,"type":"string"},"pages":{"description":"The amount of pages","type":"integer"},"prev":{"description":"Link to the previous page (if it exists)","nullable":true,"type":"string"}},"type":"object","x-ref":"#/components/schemas/Info"},"results":{"items":{"properties":{"air_date":{"description":"The air date of the episode","type":"string","key$":"air_date"},"characters":{"description":"List of characters who have been seen in this episode","items":{"type":"string"},"type":"array","key$":"characters"},"created":{"description":"Time at which the episode was created in the database","format":"date-time","type":"string","key$":"created"},"episode":{"description":"The code of the episode (e.g., S01E01)","type":"string","key$":"episode"},"id":{"description":"The id of the episode","type":"integer","key$":"id"},"name":{"description":"The name of the episode","type":"string","key$":"name"},"url":{"description":"Link to the episode's own URL endpoint","type":"string","key$":"url"}},"type":"object","x-ref":"#/components/schemas/Episode","index$":0},"key$":"results","type":"array"}},"x-ref":"#/components/schemas/EpisodeResponse"}}}},"404":{"description":"No episodes found","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"page","in":"query","description":"Page number for pagination","required":false,"schema":{"type":"integer","minimum":1,"default":1},"index$":0},{"name":"name","in":"query","description":"Filter by episode name","required":false,"schema":{"type":"string"},"index$":1},{"name":"episode","in":"query","description":"Filter by episode code (e.g., S01E01)","required":false,"schema":{"type":"string"},"index$":2}],"securitySource":"unspecified"},"GET /episode/{id}":{"protocol":"http","operationId":"getEpisodeById","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"oneOf":[{"type":"object","properties":{"id":{"description":"The id of the episode","type":"integer"},"name":{"description":"The name of the episode","type":"string"},"air_date":{"description":"The air date of the episode","type":"string"},"episode":{"description":"The code of the episode (e.g., S01E01)","type":"string"},"characters":{"description":"List of characters who have been seen in this episode","items":{"type":"string"},"type":"array"},"url":{"description":"Link to the episode's own URL endpoint","type":"string"},"created":{"description":"Time at which the episode was created in the database","format":"date-time","type":"string"}},"x-ref":"#/components/schemas/Episode"},{"type":"array","items":{"type":"object","properties":{"id":{"description":"The id of the episode","type":"integer"},"name":{"description":"The name of the episode","type":"string"},"air_date":{"description":"The air date of the episode","type":"string"},"episode":{"description":"The code of the episode (e.g., S01E01)","type":"string"},"characters":{"description":"List of characters who have been seen in this episode","items":{"type":"string"},"type":"array"},"url":{"description":"Link to the episode's own URL endpoint","type":"string"},"created":{"description":"Time at which the episode was created in the database","format":"date-time","type":"string"}},"x-ref":"#/components/schemas/Episode"}}]}}}},"404":{"description":"Episode not found","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"id","in":"path","description":"Episode ID or comma-separated list of IDs","required":true,"schema":{"type":"string"},"index$":0}],"securitySource":"unspecified"}})
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
  
