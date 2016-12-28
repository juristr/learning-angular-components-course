import { NgModule } from '@angular/core';
import { UserProfileComponent } from './profile.component';

@NgModule({
    declarations: [
        UserProfileComponent
    ],
    exports: [ UserProfileComponent]
})
export class UserProfileModule {}