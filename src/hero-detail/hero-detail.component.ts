import {Component, ChangeDetectionStrategy, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Hero} from '../hero/hero';
import {HeroService} from '../hero/hero.service';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {AppStore} from '../store';

@Component({
    templateUrl: 'src/hero-detail/hero-detail.component.html',
    styleUrls: ['src/hero-detail/hero-detail.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent implements OnInit {
    hero: Observable<Hero>;

    constructor(private _heroService: HeroService,
                private _routeParams: RouteParams,
                private store: Store<AppStore>) {
        this.hero = this.store.select('selectedHero');
        this.hero.subscribe(v => console.log('subscribed', v));
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this.store.dispatch({
            type: 'SELECT_HERO',
            payload: {
                id: 99, name: 'Yowza'
            }
        });
    }

    getHero() {
        console.log('this hero', this.hero);
        return this.hero;
    }

    goBack() {
        window.history.back();
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */