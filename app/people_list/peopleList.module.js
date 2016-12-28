System.register(['@angular/core', '../core/core.module', './peopleList.component'], function(exports_1, context_1) {
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
    var core_1, core_module_1, peopleList_component_1;
    var PeopleListModule, PeopleListNgModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_module_1_1) {
                core_module_1 = core_module_1_1;
            },
            function (peopleList_component_1_1) {
                peopleList_component_1 = peopleList_component_1_1;
            }],
        execute: function() {
            exports_1("PeopleListModule", PeopleListModule = angular
                .module('peopleApp.peopleList', [
                core_module_1.CoreModule.name
            ])
                .component('ppPeopleList', {
                templateUrl: 'app/people_list/people-list.html',
                controller: peopleList_component_1.default,
                controllerAs: 'vm'
            }));
            PeopleListNgModule = (function () {
                function PeopleListNgModule() {
                }
                PeopleListNgModule = __decorate([
                    core_1.NgModule({}), 
                    __metadata('design:paramtypes', [])
                ], PeopleListNgModule);
                return PeopleListNgModule;
            }());
            exports_1("PeopleListNgModule", PeopleListNgModule);
        }
    }
});
//# sourceMappingURL=peopleList.module.js.map