import { Component } from '@angular/core';
import { Product } from '../toy/products';
import { ToyService } from '../toy.service';
import { MarginService } from '../margin.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
    productlist:Product[] = [];
    totalPrice:number = 0;
    totalPriceWithTax:number = 0;

  constructor(private msv:MarginService, private rsv:ToyService){}

  ngOnInit(){
    this.msv.SetVisible(true, true, false);
    this.UpdateData();
  }
  ngDoCheck() {
    this.UpdateData();
  }

  RemoveFromCart(product:Product){
    this.rsv.RemoveToCart(product);
    this.UpdateData();
  }

  private UpdateData(){
    this.productlist = this.rsv.getProductlist();
    this.totalPrice = this.rsv.getTotalPriceInCart();
    this.totalPriceWithTax = this.rsv.getTotalPriceWithTaxInCart();
  }

  protected IsNonProductList():boolean { return (this.productlist.length <= 0); }

}
