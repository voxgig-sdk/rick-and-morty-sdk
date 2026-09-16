# RickAndMorty SDK feature factory

from rickandmorty_sdk.feature.base_feature import RickAndMortyBaseFeature
from rickandmorty_sdk.feature.ratelimit_feature import RickAndMortyRatelimitFeature
from rickandmorty_sdk.feature.retry_feature import RickAndMortyRetryFeature
from rickandmorty_sdk.feature.test_feature import RickAndMortyTestFeature
from rickandmorty_sdk.feature.timeout_feature import RickAndMortyTimeoutFeature


_FEATURES = {
    "base": lambda: RickAndMortyBaseFeature(),
    "ratelimit": lambda: RickAndMortyRatelimitFeature(),
    "retry": lambda: RickAndMortyRetryFeature(),
    "test": lambda: RickAndMortyTestFeature(),
    "timeout": lambda: RickAndMortyTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
