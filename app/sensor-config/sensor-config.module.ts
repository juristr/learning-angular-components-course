import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SensorConfigureComponent } from './sensor-config.component';
import { SensorFilterComponent } from './sensor-filter.component';
import { SensorListComponent } from './sensor-list.component';
import { FilterSensor } from './filter-sensor.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ SensorConfigureComponent, SensorListComponent, SensorFilterComponent, FilterSensor],
    exports: [],
})
export class SensorConfigModule {}