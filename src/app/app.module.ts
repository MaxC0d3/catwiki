import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {} from '@angular/compiler';
import { HeaderComponent } from './@components/header/header.component';
import { IntroComponent } from './@components/intro/intro.component';
import { SearchComponent } from './@components/search/search.component';
import { StatusBarComponent } from './@components/status-bar/status-bar.component';
import { DetailComponent } from './@views/Detail_/Detail.component';
import { HomeComponent } from './@views/Home_/Home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({ declarations: [
        AppComponent,
        HeaderComponent,
        IntroComponent,
        HomeComponent,
        SearchComponent,
        DetailComponent,
        StatusBarComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent], imports: [BrowserModule, AppRoutingModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
