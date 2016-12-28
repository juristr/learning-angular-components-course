import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from './../modal/modal.module';

import { SensorConfigureComponent } from './sensor-config.component';
import { SensorFilterComponent } from './sensor-filter.component';
import { SensorListComponent } from './sensor-list.component';
import { FilterSensor } from './filter-sensor.pipe';

@NgModule({
    imports: [
        CommonModule,
        ModalModule,
        FormsModule
    ],
    declarations: [
        SensorConfigureComponent,
        SensorListComponent,
        SensorFilterComponent,
        FilterSensor
    ],
    exports: [],
})
export class SensorConfigModule {} 