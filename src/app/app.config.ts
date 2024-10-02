import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, RouteReuseStrategy} from '@angular/router';

import { routes } from './app.routes';
import {FooRouteReuseStrategy} from "./route-reuse-strategy";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {provide: RouteReuseStrategy, useClass: FooRouteReuseStrategy}
  ]
};
