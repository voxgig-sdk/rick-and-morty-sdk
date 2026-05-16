<?php
declare(strict_types=1);

// RickAndMorty SDK base feature

class RickAndMortyBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(RickAndMortyContext $ctx, array $options): void {}
    public function PostConstruct(RickAndMortyContext $ctx): void {}
    public function PostConstructEntity(RickAndMortyContext $ctx): void {}
    public function SetData(RickAndMortyContext $ctx): void {}
    public function GetData(RickAndMortyContext $ctx): void {}
    public function GetMatch(RickAndMortyContext $ctx): void {}
    public function SetMatch(RickAndMortyContext $ctx): void {}
    public function PrePoint(RickAndMortyContext $ctx): void {}
    public function PreSpec(RickAndMortyContext $ctx): void {}
    public function PreRequest(RickAndMortyContext $ctx): void {}
    public function PreResponse(RickAndMortyContext $ctx): void {}
    public function PreResult(RickAndMortyContext $ctx): void {}
    public function PreDone(RickAndMortyContext $ctx): void {}
    public function PreUnexpected(RickAndMortyContext $ctx): void {}
}
