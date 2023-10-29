import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../classes/order';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public h:HttpClient) { }

  url="https://localhost:44386/api/Trips/GetAllTrips"

  AddUser(O:Order):Observable<Array<User>>
  {
   return this.h.post<Array<User>>(`${this.url}AddUser`,O)
  }

DeleteUser(UId:number):Observable<Array<User>>
{
  return this.h.delete<Array<User>>(`${this.url}DeleteUser/${UId}`)

}

}
