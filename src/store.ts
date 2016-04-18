import {Reducer} from '@ngrx/store';

import {Hero} from './hero/hero';
export interface AppStore {
    heroes: Array<Hero>;
}

export const INCREMENT = 'INCREMENT';

import {HEROES} from './hero/mock-heroes';

export const heroes: Reducer<Hero> = (state: any = [], { type, payload }) => {

    switch (type) {
        case INCREMENT:
            return HEROES;
        default:
            return state;
    }
};
