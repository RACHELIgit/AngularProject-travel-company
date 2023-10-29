import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  ThisUser:User=new User("000","","","","",true);
  url="https://localhost:44386/api/Trips/GetAllTrips"
  constructor(public h:HttpClient) { }

  listF:Array<User>=new Array<User>()

  // שליפת כל המוצרים
  getAllUsers():Observable<Array<User>>
  {
    return this.h.get<Array<User>>(this.url+"MyGetAllFoods")
  }


  GetUserByMailAndPassword(m:string,p:string):Observable<Array<User>>
  {

    return this.h.get<Array<User>>(`${this.url}GetUserByMailAndPassword/${m}/${p}`)

  }

  AddUser(U:User):Observable<Array<User>>
  {
   return this.h.post<Array<User>>(`${this.url}AddUser`,U)
  }

  UpdateUser(UId:number,User:User):Observable<Array<User>>
{
  return this.h.put<Array<User>>(`${this.url}UpdateUser/${UId}`,User)

}

DeleteUser(UId:number):Observable<Array<User>>
{
  return this.h.delete<Array<User>>(`${this.url}DeleteUser/${UId}`)

}
GetAllTripToUser():Observable<Array<User>>
{
  return this.h.get<Array<User>>(this.url+"GetAllTripToUser")
}
/**
 *   public ActionResult<List<Trip>> GetAllTripToUser(int uId)
        {
            return Ok(DB.lOrder.Where(o => o.user.userId == uId).Select(y => y.trip).ToList());
        }     
 */


}
