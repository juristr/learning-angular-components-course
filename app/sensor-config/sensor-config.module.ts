import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SensorConfigureComponent } from './sensor-config.component';
import { SensorFilterComponent } from './sensor-filter.component';
import { SensorListComponent } from './sensor-list.component';
import { ConfigModalComponent } from './config-modal.component';
import { FilterSensor } from './filter-sensor.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        SensorConfigureComponent,
        SensorListComponent,
        SensorFilterComponent,
        ConfigModalComponent,
        FilterSensor
    ],
    exports: [],
})
export class SensorConfigModule {} 