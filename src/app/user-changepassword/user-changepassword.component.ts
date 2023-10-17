import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MarginService } from '../margin.service';

@Component({
  selector: 'app-user-changepassword',
  templateUrl: './user-changepassword.component.html',
  styleUrls: ['./user-changepassword.component.css']
})
export class UserChangepasswordComponent {

  passwordForm:FormGroup;

  constructor(private location:Location, private fb:FormBuilder, private usv:UserService, private msv:MarginService) {
    this.passwordForm = this.fb.group ({
        current:"",
        new:"",
        new_reenter:""
    });
  }

  ngOnInit() {
      this.msv.SetVisible(false, false, false);
  }

  getCurrent():string { return this.passwordForm.get("current")?.value as string; }
  getNew():string { return this.passwordForm.get("new")?.value as string; }
  getNew_reenter():string { return this.passwordForm.get("new_reenter")?.value as string; }

  BackTo(){ this.location.back(); }

  Confirme(){}

  CheckInput():boolean{
    if(!this.getCurrent()) { return false; }
    if(!this.getNew()) { return false; }
    if(!this.getNew_reenter()) { return false; }
    return true;
  }
}
