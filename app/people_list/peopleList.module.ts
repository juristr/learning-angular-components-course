import {NgModule} from '@angular/core';
import {UpgradeAdapter} from '@angular/upgrade';

import { CoreModule } from '../core/core.module';
import PeopleListCtrl from './peopleList.component';

export const PeopleListModule = angular
                    .module('peopleApp.peopleList', [
                        CoreModule.name
                    ])
                    .component('ppPeopleList', {
                        templateUrl: 'app/people_list/people-list.html',
                        controller: PeopleListCtrl,
                        controllerAs: 'vm'
                    });

@NgModule({})
export class PeopleListNgModule{}

