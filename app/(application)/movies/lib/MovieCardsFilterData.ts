export type FilterButtonTypes = 'NOW_IN_CINEMAS' | 'SOON';

export interface MovieCardsFilterData {
    
    activeButton: FilterButtonTypes;
    genres: Array<string>;
    cinemas?: Array<string>;

}