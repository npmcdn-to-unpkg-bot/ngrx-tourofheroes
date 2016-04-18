import {Reducer} from '@ngrx/store';

import {Hero} from 'hero/hero';
export interface AppStore {
    heroes: Array<Hero>;
}

export const INCREMENT = 'INCREMENT';

export const heroes: Reducer<Hero> = (state: any = [], { type, payload }) => {


    switch (type) {
        case INCREMENT:
            return [
                ...state,
                payload
            ];
        default:
            return state;
    }
};
