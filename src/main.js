System.register(['angular2/platform/browser', '@ngrx/store', './store', './app/app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, store_1, store_2, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (store_1_1) {
                store_1 = store_1_1;
            },
            function (store_2_1) {
                store_2 = store_2_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                store_1.provideStore({ heroes: store_2.heroes, selectedHero: store_2.selectedHero }, { heroes: [] })
            ]).catch(function (err) { return console.error(err); });
        }
    }
});
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 
//# sourceMappingURL=main.js.map