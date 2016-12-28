import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import * as materialLite from 'material-design-lite';

import { DashboardModule } from './dashboard/dashboard.module';
import { ShellModule } from './shell/shell.module';
import {AppComponent} from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        DashboardModule,
        ShellModule
    ],
    declarations: [ AppComponent],
    bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(() => {
        materialLite.componentHandler.upgradeAllRegistered();
    });