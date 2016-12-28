System.register(['@angular/platform-browser', '@angular/core', '@angular/upgrade', './core/core.module', './people_detail/peopleDetail.module', './people_list/peopleList.module'], function(exports_1, context_1) {
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
    var platform_browser_1, core_1, upgrade_1, core_module_1, peopleDetail_module_1, peopleList_module_1;
    var AppModule, upgradeAdapter;
    return {
        setters:[
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (upgrade_1_1) {
                upgrade_1 = upgrade_1_1;
            },
            function (core_module_1_1) {
                core_module_1 = core_module_1_1;
            },
            function (peopleDetail_module_1_1) {
                peopleDetail_module_1 = peopleDetail_module_1_1;
            },
            function (peopleList_module_1_1) {
                peopleList_module_1 = peopleList_module_1_1;
            }],
        execute: function() {
            angular.module('peopleApp', [
                'ngRoute',
                core_module_1.CoreModule.name,
                peopleDetail_module_1.PeopleDetailModule.name,
                peopleList_module_1.PeopleListModule.name
            ]).config(['$routeProvider',
                function ($routeProvider) {
                    $routeProvider.
                        when('/people', {
                        template: '<pp-people-list></pp-people-list>'
                    }).
                        when('/people/:personId', {
                        template: '<pp-people-detail></pp-people-detail>'
                    }).
                        otherwise({
                        redirectTo: '/people'
                    });
                }]);
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            core_module_1.CoreNgModule,
                            peopleDetail_module_1.PeopleDetailNgModule,
                            peopleList_module_1.PeopleListNgModule
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            upgradeAdapter = new upgrade_1.UpgradeAdapter(AppModule);
            peopleDetail_module_1.PeopleDetailNgModule.setAdapter(upgradeAdapter);
            upgradeAdapter.bootstrap(document.documentElement, ['peopleApp']);
        }
    }
});
//# sourceMappingURL=app.module.js.map