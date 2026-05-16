<?php
declare(strict_types=1);

// RickAndMorty SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class RickAndMortyFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new RickAndMortyBaseFeature();
            case "test":
                return new RickAndMortyTestFeature();
            default:
                return new RickAndMortyBaseFeature();
        }
    }
}
