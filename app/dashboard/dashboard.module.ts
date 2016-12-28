import { TabsModule } from './../tabs/tabs.module';
import { WidgetModule } from './../widget/widget.module';
import { NgModule } from '@angular/core';
import { DashboardComponent  } from './dashboard.component';

@NgModule({
    imports: [
        WidgetModule,
        TabsModule
    ],
    declarations: [ DashboardComponent ],
    exports:  [ DashboardComponent ]
})
export class DashboardModule {}