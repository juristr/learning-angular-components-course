import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeAdapter } from '@angular/upgrade';

import { CoreModule, CoreNgModule } from './core/core.module';
import { PeopleDetailModule, PeopleDetailNgModule} from './people_detail/peopleDetail.module';
import { PeopleListModule, PeopleListNgModule } from './people_list/peopleList.module';

angular.module('peopleApp', [
    'ngRoute',
    CoreModule.name,
    PeopleDetailModule.name,
    PeopleListModule.name
  ]).config(['$routeProvider',
    function($routeProvider) {
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

@NgModule({
    imports: [
        BrowserModule,

        CoreNgModule,
        PeopleDetailNgModule,
        PeopleListNgModule
    ]
})
class AppModule {}

const upgradeAdapter = new UpgradeAdapter(AppModule);

PeopleDetailNgModule.setAdapter(upgradeAdapter);

upgradeAdapter.bootstrap(document.documentElement, ['peopleApp']);