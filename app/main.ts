import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HelloAngular2Component } from './helloAngular2.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ HelloAngular2Component ],
    bootstrap: [ HelloAngular2Component ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);