import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViewsModule } from './@views/views.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './@Components/intro/intro.component';

@NgModule({
  declarations: [AppComponent, IntroComponent],
  imports: [BrowserModule, AppRoutingModule, ViewsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
