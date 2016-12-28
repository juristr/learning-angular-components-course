import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal.component';
import { OpenWithDirective } from './open-with.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ ModalComponent, OpenWithDirective ],
    exports:  [ ModalComponent, OpenWithDirective ]
})
export class ModalModule {}