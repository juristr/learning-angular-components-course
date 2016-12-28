import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TabComponent } from './tab.component';
import { TabsComponent } from './tabs.component';
import { CoreModule } from './../core/core.module';

@NgModule({
    imports: [
        CommonModule, 
        CoreModule 
    ],
    declarations: [ TabsComponent, TabComponent ],
    exports:  [ TabsComponent, TabComponent  ]
})
export class TabsModule {}