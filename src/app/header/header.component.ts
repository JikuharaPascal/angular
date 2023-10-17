import { Component } from '@angular/core';
import { ToyService } from '../toy.service';
import { MarginService } from '../margin.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    protected URL_Logo:string = "assets/img/Logo.png";

    constructor(private msv:MarginService, private rsv:ToyService, private usv:UserService){}

    ngOnInit() {}
    ngOnChanges() {}

    SearchWord(keyword:string):void {
      this.rsv.setCurrentSearchName(keyword);
    }

    IsVisible():boolean { return this.msv.getHeaderVisible();}

    getNumInCart():number { return this.rsv.getNumInCart(); }

    getCurrentSearchName():string { return this.rsv.getCurrentSearchName(); }

    getUserName():string { return this.usv.getUserName(); }
}
