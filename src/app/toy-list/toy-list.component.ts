import { Component } from '@angular/core';
import { Toy } from '../toy/toy';
import { Category } from '../toy/category';
import { ToyService } from '../toy.service';
import { MenuData } from '../toy/menudata';
import { MarginService } from '../margin.service';

@Component({
  selector: 'app-toy-list',
  templateUrl: './toy-list.component.html',
  styleUrls: ['./toy-list.component.css']
})
export class ToyListComponent {

    menudata!:MenuData[];

    constructor(private msv:MarginService, private rsv:ToyService){}

    ngOnInit() {
      this.msv.SetVisible(true,true,true);
      this.menudata = this.rsv.getToydataOrderbyDisplay();
    }

    ngDoCheck() {
      this.menudata = this.rsv.getToydataOrderbyDisplay();
    }
}
