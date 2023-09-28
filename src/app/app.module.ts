import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './@components/header/header.component';
import { IntroComponent } from './@components/intro/intro.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './@views/Home_/Home.component';
import { SearchComponent } from './@components/search/search.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, IntroComponent, HomeComponent, SearchComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
