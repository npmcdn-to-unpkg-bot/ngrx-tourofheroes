import {bootstrap} from 'angular2/platform/browser';
import {provideStore} from '@ngrx/store';

import {heroes, selectedHero} from './store';
import {AppComponent} from './app/app.component';

bootstrap(AppComponent, [
    provideStore({heroes, selectedHero}, {heroes: []})
]).catch(err => console.error(err));

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */