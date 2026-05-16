# ProjectName SDK exists test

import pytest
from rickandmorty_sdk import RickAndMortySDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = RickAndMortySDK.test(None, None)
        assert testsdk is not None
