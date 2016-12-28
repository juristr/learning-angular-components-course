System.register(['@angular/core', '../core/core.module', './peopleDetail.component'], function(exports_1, context_1) {
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
    var core_1, core_module_1, peopleDetail_component_1;
    var PeopleDetailModule, PeopleDetailNgModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_module_1_1) {
                core_module_1 = core_module_1_1;
            },
            function (peopleDetail_component_1_1) {
                peopleDetail_component_1 = peopleDetail_component_1_1;
            }],
        execute: function() {
            exports_1("PeopleDetailModule", PeopleDetailModule = angular.module('peopleApp.peopleDetail', [
                core_module_1.CoreModule.name
            ]));
            PeopleDetailNgModule = (function () {
                function PeopleDetailNgModule() {
                }
                PeopleDetailNgModule.setAdapter = function (adapter) {
                    PeopleDetailModule.directive('ppPeopleDetail', adapter.downgradeNg2Component(peopleDetail_component_1.PeopleDetailComponent));
                    adapter.upgradeNg1Provider('$routeParams');
                    adapter.upgradeNg1Provider('people');
                };
                PeopleDetailNgModule = __decorate([
                    core_1.NgModule({
                        declarations: [
                            peopleDetail_component_1.PeopleDetailComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PeopleDetailNgModule);
                return PeopleDetailNgModule;
            }());
            exports_1("PeopleDetailNgModule", PeopleDetailNgModule);
        }
    }
});
//# sourceMappingURL=peopleDetail.module.js.map