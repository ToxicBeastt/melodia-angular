import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HeaderComponent} from "./layout/header/header.component";
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderComponent, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
