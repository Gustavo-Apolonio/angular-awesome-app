import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { applyPolyfills, defineCustomElements } from '@soma/html/loader';

import SomaDS from '@soma/ds';
import xpTheme from '@soma/ds/themes/xp';

SomaDS.use(xpTheme);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

applyPolyfills().then(() => defineCustomElements());
