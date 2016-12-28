import { CoreModule } from './../core/core.module';
import { WidgetComponent } from './widget.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [ CoreModule ],
    declarations: [ WidgetComponent ],
    exports:  [ WidgetComponent ]
})
export class WidgetModule {}