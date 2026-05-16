
import { Context } from './Context'


class RickAndMortyError extends Error {

  isRickAndMortyError = true

  sdk = 'RickAndMorty'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  RickAndMortyError
}

