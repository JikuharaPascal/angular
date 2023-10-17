import { Component } from '@angular/core';
import { Category } from '../toy/category';
import { ToyService } from '../toy.service';
import { MarginService } from '../margin.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent {
  categorydata!:Category[];

  constructor(private msv:MarginService, private rsv:ToyService){}

  ngOnInit() {
    this.categorydata = this.rsv.getCategorydata();
  }

  IsVisible():boolean { return this.msv.getSideVisible();}
}
