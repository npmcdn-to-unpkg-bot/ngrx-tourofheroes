System.register(['./mock-heroes', 'angular2/core', '@ngrx/store', '../store'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var mock_heroes_1, core_1, store_1, store_2;
    var HeroService;
    return {
        setters:[
            function (mock_heroes_1_1) {
                mock_heroes_1 = mock_heroes_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (store_1_1) {
                store_1 = store_1_1;
            },
            function (store_2_1) {
                store_2 = store_2_1;
            }],
        execute: function() {
            HeroService = (function () {
                function HeroService(store) {
                    this.store = store;
                    this.store = store;
                    this.heroes = store.select('heroes');
                    this.selectedHero = store.select('selectedHero');
                    this.store.dispatch({ type: store_2.ADD_ITEMS, payload: mock_heroes_1.HEROES });
                }
                HeroService.prototype.setSelectedHero = function (id) {
                    // const selectedItem = this.heroes.filter(item => item['id'] !== id);
                    var selectedHero = { id: 11, name: 'Bogus' };
                    this.store.dispatch({
                        type: store_2.SELECT_HERO,
                        payload: [selectedHero]
                    });
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [store_1.Store])
                ], HeroService);
                return HeroService;
            }());
            exports_1("HeroService", HeroService);
        }
    }
});
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 
//# sourceMappingURL=hero.service.js.map