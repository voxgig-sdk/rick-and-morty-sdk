<?php
declare(strict_types=1);

// RickAndMorty SDK utility: prepare_body

class RickAndMortyPrepareBody
{
    public static function call(RickAndMortyContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
