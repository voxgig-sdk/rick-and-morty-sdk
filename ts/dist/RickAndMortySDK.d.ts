import { CharacterEntity } from './entity/CharacterEntity';
import { EpisodeEntity } from './entity/EpisodeEntity';
import { LocationEntity } from './entity/LocationEntity';
export type * from './RickAndMortyTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { RickAndMortyEntityBase } from './RickAndMortyEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class RickAndMortySDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Character(entopts?: Record<string, any>): CharacterEntity;
    Episode(entopts?: Record<string, any>): EpisodeEntity;
    Location(entopts?: Record<string, any>): LocationEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): RickAndMortySDK;
    tester(testopts?: any, sdkopts?: any): RickAndMortySDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof RickAndMortySDK;
export { stdutil, config, BaseFeature, RickAndMortyEntityBase, RickAndMortySDK, SDK, };
