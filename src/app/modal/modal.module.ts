import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal.component';
import { OpenWithDirective } from './open-modal.directive';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ ModalComponent, OpenWithDirective ],
    exports:  [ ModalComponent, OpenWithDirective ]
})
export class ModalModule {}