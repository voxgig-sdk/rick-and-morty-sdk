<?php
declare(strict_types=1);

// RickAndMorty SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class RickAndMortyMakeContext
{
    public static function call(array $ctxmap, ?RickAndMortyContext $basectx): RickAndMortyContext
    {
        return new RickAndMortyContext($ctxmap, $basectx);
    }
}
