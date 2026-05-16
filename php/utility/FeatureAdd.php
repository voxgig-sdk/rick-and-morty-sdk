<?php
declare(strict_types=1);

// RickAndMorty SDK utility: feature_add

class RickAndMortyFeatureAdd
{
    public static function call(RickAndMortyContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
