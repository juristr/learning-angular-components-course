import {NgModule} from '@angular/core';
import {UpgradeAdapter} from '@angular/upgrade';

import { CoreModule } from '../core/core.module';
import { PeopleDetailComponent } from './peopleDetail.component';

export const PeopleDetailModule = angular.module('peopleApp.peopleDetail', [
                CoreModule.name
            ]);

@NgModule({
    declarations: [
        PeopleDetailComponent
    ]
})
export class PeopleDetailNgModule {
    static setAdapter(adapter: UpgradeAdapter) {
        PeopleDetailModule.directive('ppPeopleDetail', <angular.IDirectiveFactory>adapter.downgradeNg2Component(PeopleDetailComponent));

        adapter.upgradeNg1Provider('$routeParams');
        adapter.upgradeNg1Provider('people');
    }
}

