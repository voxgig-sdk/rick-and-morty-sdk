<?php
declare(strict_types=1);

// RickAndMorty SDK utility: result_body

class RickAndMortyResultBody
{
    public static function call(RickAndMortyContext $ctx): ?RickAndMortyResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
