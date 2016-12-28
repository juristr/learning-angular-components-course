import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import * as materialLite from 'material-design-lite';

import { AppModule } from './app/';
import componentHandler from 'material-design-lite';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(() => {
        materialLite.componentHandler.upgradeAllRegistered();
    });
