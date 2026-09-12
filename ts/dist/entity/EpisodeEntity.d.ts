import { RickAndMortyEntityBase } from '../RickAndMortyEntityBase';
import type { RickAndMortySDK } from '../RickAndMortySDK';
import type { Control } from '../types';
import type { Episode, EpisodeLoadMatch, EpisodeListMatch } from '../RickAndMortyTypes';
declare class EpisodeEntity extends RickAndMortyEntityBase<Episode> {
    constructor(client: RickAndMortySDK, entopts: any);
    make(this: EpisodeEntity): EpisodeEntity;
    load(this: any, reqmatch?: EpisodeLoadMatch, ctrl?: Control): Promise<EpisodeEntity>;
    list(this: any, reqmatch?: EpisodeListMatch, ctrl?: Control): Promise<EpisodeEntity[]>;
}
export { EpisodeEntity };
