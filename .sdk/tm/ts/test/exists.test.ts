
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { RickAndMortySDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = RickAndMortySDK.test()
    equal(testsdk instanceof RickAndMortySDK, true,
      'RickAndMortySDK.test() must return a client synchronously')
  })

})
