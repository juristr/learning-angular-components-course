import { NgModule } from '@angular/core';

import { TabsModule } from '../tabs/tabs.module';

import { HumiditySensorComponent } from './humidity.component';
import { DonutChartDirective } from './donut-chart.directive';

@NgModule({
    imports: [
        TabsModule
    ],
    declarations: [ HumiditySensorComponent, DonutChartDirective ],
    exports:  [ HumiditySensorComponent ]
})
export class SensorsModule {}