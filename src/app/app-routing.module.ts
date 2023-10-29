import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrEditComponent } from './components/add-or-edit/add-or-edit.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { OurTripsComponent } from './components/our-trips/our-trips.component';
import { SigninComponent } from './components/signin/signin.component';
import { TripDeatilesComponent } from './components/trip-deatiles/trip-deatiles.component';

const routes: Routes = [
 {path:'addOrEdit', component:AddOrEditComponent},
 {path:'homePage', component:HomePageComponent},
 {path:'logIn', component:LogInComponent},
 {path:'ourTrips', component:OurTripsComponent,children:[
    {path:'TripsDeatiles/:Tripsyahad', component:TripDeatilesComponent},]},
 {path:'signIn', component:SigninComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
