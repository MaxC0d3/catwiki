import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViewsModule } from './@views/views.module';

import { HeaderComponent } from './@components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, ViewsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
