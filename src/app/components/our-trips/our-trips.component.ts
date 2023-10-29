import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from 'src/app/classes/Trip';
import { TypeTrip } from 'src/app/classes/TypeTrip';
import { TripsService } from 'src/app/services/trips.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-our-trips',
  templateUrl: './our-trips.component.html',
  styleUrls: ['./our-trips.component.css']
})
export class OurTripsComponent implements OnInit {
  selectedTrip:Trip=new Trip('000',new TypeTrip(0,' '),new Date(),0,0,0,"",false)
  constructor(public CTrips:TripsService,public UsersS:UsersService,public r:Router) { }

  ngOnInit(): void {

  this.CTrips.GetAllTrips().subscribe(

    s => {
      this.CTrips.listTrips = s;
       console.log(this.CTrips.listTrips);

    },
    e => { alert(e.message) }
  )
  
  }
   
  getDeatiles(f:Trip){
    // if(this.UsersS.ThisUser.userName!="000"){
         alert(f.numChair)
        console.log(f);
        // this.r.navigate([`./ourTrips/TripsDeatiles/${f.tripYaad}`])
    // }

   
  }




}








