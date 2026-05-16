-- RickAndMorty SDK error

local RickAndMortyError = {}
RickAndMortyError.__index = RickAndMortyError


function RickAndMortyError.new(code, msg, ctx)
  local self = setmetatable({}, RickAndMortyError)
  self.is_sdk_error = true
  self.sdk = "RickAndMorty"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function RickAndMortyError:error()
  return self.msg
end


function RickAndMortyError:__tostring()
  return self.msg
end


return RickAndMortyError
