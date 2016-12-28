import { WidgetModule } from './../widget/widget.module';
import { NgModule } from '@angular/core';

import { DashboardComponent  } from './dashboard.component';

import { SensorsModule } from '../sensors/sensors.module';

@NgModule({
    imports: [
        WidgetModule,
        SensorsModule
     ],
    declarations: [ DashboardComponent ],
    exports:  [ DashboardComponent ]
})
export class DashboardModule {}