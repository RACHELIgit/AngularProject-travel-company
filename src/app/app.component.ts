import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  constructor(public Suser:UsersService,public r:Router) {
   
    
  }
  click(){
    if(this.Suser.ThisUser.userName=="000")
    this.r.navigate(['logIn'])
    else
    alert("משתמש קיים")
    //this.r.navigate(['hotels/abute/'+id])
  }
}

