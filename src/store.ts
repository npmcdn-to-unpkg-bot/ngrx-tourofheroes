import {Reducer} from '@ngrx/store';

import {Hero} from './hero/hero';
export interface AppStore {
    heroes: Array<Hero>;
}

export const ADD_ITEMS = 'ADD_ITEMS';
export const SELECT_HERO = 'SELECT_HERO';

export const heroes: Reducer<Hero> = (state: any = [], { type, payload }) => {

    switch (type) {
        case ADD_ITEMS:
            return payload;
        default:
            return state;
    }
};

export const selectedHero = (state: any = null, {type, payload}) => {
    switch (type) {
        case SELECT_HERO:
            return payload;
        default:
            return state;
    }
};
