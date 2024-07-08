import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HeaderComponent} from "./layout/header/header.component";
import {HttpClientModule} from "@angular/common/http";
import {FooterComponent} from "./layout/footer/footer.component";
import {HomeComponent} from "./home/home.component";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderComponent, HttpClientModule, FooterComponent, HomeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
