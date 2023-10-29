import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OurTripsComponent } from './components/our-trips/our-trips.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SigninComponent } from './components/signin/signin.component';
import { AddOrEditComponent } from './components/add-or-edit/add-or-edit.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TripDeatilesComponent } from './components/trip-deatiles/trip-deatiles.component';


@NgModule({
  declarations: [
    AppComponent,
    OurTripsComponent,
    HomePageComponent,
    LogInComponent,
    SigninComponent,
    AddOrEditComponent,
    TripDeatilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
