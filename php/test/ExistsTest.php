<?php
declare(strict_types=1);

// RickAndMorty SDK exists test

require_once __DIR__ . '/../rickandmorty_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = RickAndMortySDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
