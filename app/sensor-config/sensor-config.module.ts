import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SensorConfigureComponent } from './sensor-config.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ SensorConfigureComponent],
    exports: [SensorConfigureComponent],
})
export class SensorConfigModule {}