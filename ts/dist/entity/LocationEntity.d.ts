import { RickAndMortyEntityBase } from '../RickAndMortyEntityBase';
import type { RickAndMortySDK } from '../RickAndMortySDK';
import type { Control } from '../types';
import type { Location, LocationLoadMatch, LocationListMatch } from '../RickAndMortyTypes';
declare class LocationEntity extends RickAndMortyEntityBase<Location> {
    constructor(client: RickAndMortySDK, entopts: any);
    make(this: LocationEntity): LocationEntity;
    load(this: any, reqmatch?: LocationLoadMatch, ctrl?: Control): Promise<LocationEntity>;
    list(this: any, reqmatch?: LocationListMatch, ctrl?: Control): Promise<LocationEntity[]>;
}
export { LocationEntity };
