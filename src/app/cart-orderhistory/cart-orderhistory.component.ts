import { Component } from '@angular/core';
import { ToyService } from '../toy.service';
import { MarginService } from '../margin.service';
import { OrderHistory } from '../toy/orderhistory';

@Component({
  selector: 'app-cart-orderhistory',
  templateUrl: './cart-orderhistory.component.html',
  styleUrls: ['./cart-orderhistory.component.css']
})
export class CartOrderhistoryComponent {

  protected orderList:OrderHistory[] = [];

  constructor(private msv:MarginService, private rsv:ToyService){}

  ngOnInit(){
      this.msv.SetVisible(true, true, false);
      this.orderList=this.rsv.getOrderList(1);
  }

  IsNoOrder():boolean { return (this.orderList.length <= 0);}
}
