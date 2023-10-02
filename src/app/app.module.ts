import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './@components/header/header.component';
import { IntroComponent } from './@components/intro/intro.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './@views/Home_/Home.component';
import { SearchComponent } from './@components/search/search.component';
import { DetailComponent } from './@views/Detail_/Detail.component';
import { StatusBarComponent } from './@components/status-bar/status-bar.component';
import {  } from '@angular/compiler';

@NgModule({
  declarations: [AppComponent, HeaderComponent, IntroComponent, HomeComponent, SearchComponent, DetailComponent, StatusBarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule, AppRoutingModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
