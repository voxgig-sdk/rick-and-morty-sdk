# RickAndMorty SDK utility: make_context

from rickandmorty_sdk.core.context import RickAndMortyContext


def make_context_util(ctxmap, basectx):
    return RickAndMortyContext(ctxmap, basectx)
