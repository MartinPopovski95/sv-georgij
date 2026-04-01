import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';
import { LOCALE_ID } from '@angular/core';
import  localeMk  from "@angular/common/locales/mk";


import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { authInterceptor } from './core/interceptors/auth-interceptor';
import { AuthService } from './core/services/auth.service';

registerLocaleData(localeMk)

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),

    provideRouter(routes,
      withComponentInputBinding(),
      withRouterConfig({paramsInheritanceStrategy: "always"})
    ),

    provideHttpClient(withInterceptors([authInterceptor])),

    provideAppInitializer(() => {
      inject(AuthService).initializeAuth();
    }),

    {provide: LOCALE_ID, useValue: "mk"}
  ]
};
