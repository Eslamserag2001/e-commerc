import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { loadingInterceptor } from './interceptor/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,withViewTransitions()),
    provideClientHydration(),
    importProvidersFrom( ToastrModule ,BrowserAnimationsModule,RouterModule, HttpClientModule,NgxSpinnerModule ),
      provideHttpClient(withFetch(),withInterceptors([loadingInterceptor])),
    provideAnimations(),
    provideToastr(),
    
    
    ]
};
