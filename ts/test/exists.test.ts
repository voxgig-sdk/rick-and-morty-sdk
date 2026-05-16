
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { RickAndMortySDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await RickAndMortySDK.test()
    equal(null !== testsdk, true)
  })

})
