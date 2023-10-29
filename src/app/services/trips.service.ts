import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from '../classes/Trip';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(public h:HttpClient) { }
  listTrips:Array<Trip>=new Array<Trip>();

url="https://localhost:44386/api/Trips/"





// שליפת מאכלים בהתאם לקוד קטגוריה
GetAllTrips():Observable<Array<Trip>>
{
  return this.h.get<Array<Trip>>(`${this.url}GetAllTrips`)

}

GetTripById(TID:number):Observable<Array<Trip>>
{
  return this.h.get<Array<Trip>>(`${this.url}GetAllTrips/${TID}`)

}
AddTrip(T:Trip):Observable<Array<Trip>>
{
 return this.h.post<Array<Trip>>(`${this.url}AddTrip`,T)
}

UpdateTrip(UId:number,User:Trip):Observable<Array<Trip>>
{
return this.h.put<Array<Trip>>(`${this.url}UpdateTrip/${UId}`,User)

}

DeleteTrip(UId:number):Observable<Array<Trip>>
{
return this.h.delete<Array<Trip>>(`${this.url}DeleteTrip/${UId}`)

}
GetInvitesToTripById(TID:number):Observable<Array<Trip>>
{
  return this.h.get<Array<Trip>>(`${this.url}GetInvitesToTripById/${TID}`)

}

}
