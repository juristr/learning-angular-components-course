import {NgModule} from '@angular/core';
import {UpgradeAdapter} from '@angular/upgrade';

import peopleService from './people.service';

export const CoreModule = angular
                        .module('peopleApp.core',[])
                        .factory('people', peopleService);

@NgModule({})
export class CoreNgModule{}