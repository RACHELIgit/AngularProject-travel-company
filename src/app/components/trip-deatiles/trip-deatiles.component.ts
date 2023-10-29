import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trip } from 'src/app/classes/Trip';
import { TypeTrip } from 'src/app/classes/TypeTrip';
import { TripsService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-trip-deatiles',
  templateUrl: './trip-deatiles.component.html',
  styleUrls: ['./trip-deatiles.component.css']
})

export class TripDeatilesComponent implements OnInit {

  constructor(public AR:ActivatedRoute ,public TripsSL:TripsService) { }
   myTrip:Trip=new Trip('000',new TypeTrip(0,' '),new Date(),0,0,0,"",false)
   ok:boolean=false
   @Input() Trip:Trip=new Trip('000',new TypeTrip(0,' '),new Date(),0,0,0,"",false)

  ngOnInit(): void {
    debugger

    
    // this.AR.params.subscribe(
    //  p=>{
    //     this.myTrip=this.TripsSL.listTrips.find(t=>t.tripYaad==p['TripYahad'])!
    //  },
    //  err=>{console.log(err);
    //  }
  
    //   )
    //   console.log(this.myTrip);
     

  }


  
}
