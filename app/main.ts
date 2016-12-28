import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HttpModule } from '@angular/http';

import * as materialLite from 'material-design-lite';

import {AppComponent} from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SensorConfigureComponent } from './sensor-config/sensor-config.component';

import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ShellModule } from './shell/shell.module';
import { SensorConfigModule } from './sensor-config/sensor-config.module';

const appRoutes:Route[] = [
  { path: '', component: DashboardComponent },
  { path: 'config', component: SensorConfigureComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        RouterModule.forRoot(appRoutes, { useHash: true }),

        CoreModule,
        DashboardModule,
        ShellModule,
        SensorConfigModule
    ],
    declarations: [ AppComponent],
    bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(() => {
        materialLite.componentHandler.upgradeAllRegistered();
    });