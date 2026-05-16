# RickAndMorty SDK feature factory

from feature.base_feature import RickAndMortyBaseFeature
from feature.test_feature import RickAndMortyTestFeature


def _make_feature(name):
    features = {
        "base": lambda: RickAndMortyBaseFeature(),
        "test": lambda: RickAndMortyTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
