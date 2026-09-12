import { RickAndMortyEntityBase } from '../RickAndMortyEntityBase';
import type { RickAndMortySDK } from '../RickAndMortySDK';
import type { Control } from '../types';
import type { Character, CharacterLoadMatch, CharacterListMatch } from '../RickAndMortyTypes';
declare class CharacterEntity extends RickAndMortyEntityBase<Character> {
    constructor(client: RickAndMortySDK, entopts: any);
    make(this: CharacterEntity): CharacterEntity;
    load(this: any, reqmatch?: CharacterLoadMatch, ctrl?: Control): Promise<CharacterEntity>;
    list(this: any, reqmatch?: CharacterListMatch, ctrl?: Control): Promise<CharacterEntity[]>;
}
export { CharacterEntity };
