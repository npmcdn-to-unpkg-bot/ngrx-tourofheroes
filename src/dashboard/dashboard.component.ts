import {Component, OnInit, ChangeDetectionStrategy} from 'angular2/core';
import {Router} from 'angular2/router';

import {Observable} from 'rxjs/Observable';

import {Hero} from '../hero/hero';
import {HeroService} from '../hero/hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'src/dashboard/dashboard.component.html',
    styleUrls: ['src/dashboard/dashboard.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

    heroes: Observable<Array<Hero>>;

    constructor(private _router: Router,
                private _heroService: HeroService) {
    }

    ngOnInit() {
        this.heroes = this._heroService.heroes;
    }

    gotoDetail(hero: Hero) {
        const link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }
}

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */