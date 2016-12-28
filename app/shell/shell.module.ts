import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { MenuComponent } from './menu.component';
import { SidebarComponent } from './sidebar.component';
import { UserProfileModule } from './../user-profile/user-profile.module';

@NgModule({
    imports: [
        RouterModule,
        UserProfileModule
    ],
    declarations: [ HeaderComponent, SidebarComponent, MenuComponent ],
    exports: [ HeaderComponent, SidebarComponent, MenuComponent ],
})
export class ShellModule {}
