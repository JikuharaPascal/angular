import { Component } from '@angular/core';
import { MarginService } from '../margin.service';
import { ToyService } from '../toy.service';
import { Product } from '../toy/products';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { PaymentMethod } from '../toy/paymentmethod';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent {
  protected productlist:Product[] = [];
  protected totalPrice:number = 0;
  protected totalPriceWithTax:number = 0;
  protected paymentForm:FormGroup;
  protected choices:PaymentMethod[] = [];
  protected address:string = "";

  constructor(private msv:MarginService, private rsv:ToyService, private usv:UserService, private fb:FormBuilder){
    this.paymentForm=this.fb.group({paymentMethod: 1});
  }

  ngOnInit(){
    this.msv.SetVisible(true, true, false);
    this.UpdateData();

    this.address = this.usv.getUser().address;
    let methodList = this.rsv.getPaymentMethodData();
    for(let i = 0; i < methodList.length; i++) {
      this.choices.push(methodList[i]);
    }
  }

  private UpdateData():void{
    this.productlist = this.rsv.getProductlist();
    this.totalPrice = this.rsv.getTotalPriceInCart();
    this.totalPriceWithTax = this.rsv.getTotalPriceWithTaxInCart();
  }

  protected IsNonProductList():boolean { return (this.productlist.length <= 0); }

  protected getPaymentMethod():number { return Number(this.paymentForm.get("paymentMethod")?.value);  }

  protected Purchase():void { this.rsv.Purchase(this.getPaymentMethod()); }
}
