import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeTrip } from '../classes/TypeTrip';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  url="https://localhost:44386/api/Trips/GetAllTrips"

  constructor(public h:HttpClient ) { }

  GetAllType():Observable<Array<TypeTrip>>
  {
    return this.h.get<Array<TypeTrip>>(this.url+"MyGetAllFoods")
  }
  AddUser(T:TypeTrip):Observable<Array<TypeTrip>>
  {
   return this.h.post<Array<TypeTrip>>(`${this.url}AddUser`,T)
  }

  DeleteUser(UId:number):Observable<Array<TypeTrip>>
  {
    return this.h.delete<Array<TypeTrip>>(`${this.url}DeleteUser/${UId}`)
  
  }

}
