import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { HelloAngular2Component } from './helloAngular2.component';

@Component({
    selector: 'my-app',
    template: '<hello-angular who="Juri" (sayHello)="onSayHello($event)"></hello-angular>'
})
class AppComponent{

    onSayHello(value) {
        console.log(value);
    }

}

@NgModule({
    imports: [BrowserModule],
    declarations: [ AppComponent, HelloAngular2Component ],
    bootstrap: [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
