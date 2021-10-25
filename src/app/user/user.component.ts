import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  UserList: User[] = [];
  constructor(private userService: UserService, private router: Router, private activeRoute: ActivatedRoute) { }
  userEmail: any;
  user!: User;
  email: string = "mike@gmail.com";
  ngOnInit(): void {
    
    /*this.userService.find().subscribe(data => {      
      this.UserList = data;
        console.log(this.UserList);
        */
        //calls to an ibservable do not happen until subscribe is called
        
  }

  details(): void {
    let route = this.router.config.find(r => r.path === 'user-details/:email');
  
    if (route) {
      //route.data = this.email;
      this.router.navigateByUrl(`/user-details/${this.email}`);
    }
  }
}


