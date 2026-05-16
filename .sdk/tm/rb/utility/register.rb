# RickAndMorty SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

RickAndMortyUtility.registrar = ->(u) {
  u.clean = RickAndMortyUtilities::Clean
  u.done = RickAndMortyUtilities::Done
  u.make_error = RickAndMortyUtilities::MakeError
  u.feature_add = RickAndMortyUtilities::FeatureAdd
  u.feature_hook = RickAndMortyUtilities::FeatureHook
  u.feature_init = RickAndMortyUtilities::FeatureInit
  u.fetcher = RickAndMortyUtilities::Fetcher
  u.make_fetch_def = RickAndMortyUtilities::MakeFetchDef
  u.make_context = RickAndMortyUtilities::MakeContext
  u.make_options = RickAndMortyUtilities::MakeOptions
  u.make_request = RickAndMortyUtilities::MakeRequest
  u.make_response = RickAndMortyUtilities::MakeResponse
  u.make_result = RickAndMortyUtilities::MakeResult
  u.make_point = RickAndMortyUtilities::MakePoint
  u.make_spec = RickAndMortyUtilities::MakeSpec
  u.make_url = RickAndMortyUtilities::MakeUrl
  u.param = RickAndMortyUtilities::Param
  u.prepare_auth = RickAndMortyUtilities::PrepareAuth
  u.prepare_body = RickAndMortyUtilities::PrepareBody
  u.prepare_headers = RickAndMortyUtilities::PrepareHeaders
  u.prepare_method = RickAndMortyUtilities::PrepareMethod
  u.prepare_params = RickAndMortyUtilities::PrepareParams
  u.prepare_path = RickAndMortyUtilities::PreparePath
  u.prepare_query = RickAndMortyUtilities::PrepareQuery
  u.result_basic = RickAndMortyUtilities::ResultBasic
  u.result_body = RickAndMortyUtilities::ResultBody
  u.result_headers = RickAndMortyUtilities::ResultHeaders
  u.transform_request = RickAndMortyUtilities::TransformRequest
  u.transform_response = RickAndMortyUtilities::TransformResponse
}
