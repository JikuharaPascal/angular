import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { MarginService } from '../margin.service';
import { User } from '../user/user';
import { Prefecture } from '../user/prefecture';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent {
  settingForm:FormGroup;
  user:User = new User();
  prefectureDataList!:Prefecture[];

  constructor(private location:Location, private fb:FormBuilder, private usv:UserService, private msv:MarginService) {
    this.user = this.usv.getUser();

    this.settingForm = this.fb.group ({
        name:this.user.name,
        mail:this.user.mail,
        tel:this.user.tel,
        prefecture_id:this.user.prefecture_id,
        address:this.user.address
    });
  }

  ngOnInit() {
      this.msv.SetVisible(false, false, false);
      this.prefectureDataList = this.usv.getPrefectureDataList();
  }

  getName():string { return this.settingForm.get("name")?.value as string; }
  getMail():string { return this.settingForm.get("mail")?.value as string; }
  getTel():string { return this.settingForm.get("tel")?.value as string; }
  getPrefectureId():number { return this.settingForm.get("prefecture_id")?.value as number; }
  getAddress():string { return this.settingForm.get("address")?.value as string; }

  BackTo(){ this.location.back(); }

  Confirme(){}

  CheckInput():boolean{
    if(!this.getName()) { return false; }
    if(!this.getMail()) { return false; }
    if(!this.getTel()) { return false; }
    if(!this.getPrefectureId()) { return false; }
    if(!this.getAddress()) { return false; }
    return true;
  }
}
