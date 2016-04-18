import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Observable} from 'rxjs/Observable';

import {Hero} from '../hero/hero';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {HeroService} from '../hero/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'src/heroes/heroes.component.html',
    styleUrls: ['src/heroes/heroes.component.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
    heroes: Observable<Array<Hero>>;
    selectedHero: Hero;

    constructor(private _router: Router,
                private _heroService: HeroService) {
    }

    ngOnInit() {
        this.heroes = this._heroService.heroes;
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */