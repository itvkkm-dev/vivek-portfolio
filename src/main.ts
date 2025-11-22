import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

// bootstrapApplication(App, appConfig);

bootstrapApplication(App, {
  providers: [provideRouter(routes), importProvidersFrom(BrowserAnimationsModule)],
}).catch((err) => console.error(err));
