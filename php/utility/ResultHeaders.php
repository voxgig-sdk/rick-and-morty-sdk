<?php
declare(strict_types=1);

// RickAndMorty SDK utility: result_headers

class RickAndMortyResultHeaders
{
    public static function call(RickAndMortyContext $ctx): ?RickAndMortyResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
