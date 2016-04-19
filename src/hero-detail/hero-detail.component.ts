import {Component, ChangeDetectionStrategy, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Hero} from '../hero/hero';
import {HeroService} from '../hero/hero.service';
import {Observable} from 'rxjs/Observable';

@Component({
    // templateUrl: 'src/hero-detail/hero-detail.component.html',
    template: `
<div *ngFor="#thisHero of hero | async"><h1>Id: {{thisHero.id}}</h1></div>
`,
    styleUrls: ['src/hero-detail/hero-detail.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent implements OnInit {
    hero: Observable<Hero>;

    constructor(private _routeParams: RouteParams,
                private _heroService: HeroService) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.setSelectedHero(id);
        this.hero = this._heroService.selectedHero;
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