import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {AppStore, ADD_ITEMS, SELECT_HERO} from '../store';

@Injectable()
export class HeroService {

    heroes: Observable<Array<Hero>>;
    selectedHero: Observable<Hero>;

    constructor(private store: Store<AppStore>) {
        this.store = store;
        this.heroes = store.select('heroes');
        this.selectedHero = store.select('selectedHero');
        this.store.dispatch({ type: ADD_ITEMS, payload: HEROES });
    }

    setSelectedHero(id: number) {
        // const selectedItem = this.heroes.filter(item => item['id'] !== id);
        const selectedHero = { id: 11, name: 'Bogus' };
        this.store.dispatch({
            type: SELECT_HERO,
            payload: [selectedHero]
        });
    }
}

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */