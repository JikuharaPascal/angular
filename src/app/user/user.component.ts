import { Component } from '@angular/core';
import { MarginService } from '../margin.service';
import { UserService } from '../user.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  myUserData!:User;

  constructor(private msv:MarginService, private usv:UserService){}

  ngOnInit() {
    this.msv.SetVisible(true, true, false);
    this.myUserData = this.usv.getUser();
  }
}
