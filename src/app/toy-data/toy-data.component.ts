import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Toy } from '../toy/toy';
import { Category } from '../toy/category';
import { ToyService } from '../toy.service';
import { Product } from '../toy/products';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { MarginService } from '../margin.service';

@Component({
  selector: 'app-toy-data',
  templateUrl: './toy-data.component.html',
  styleUrls: ['./toy-data.component.css']
})
export class ToyDataComponent {

  protected toyid!:string;
  protected toy!:Toy;
  protected category!:string;

  protected maxNum = 10;
  protected toyNumInCart:number = 0;
  protected noMoreAddInCart:boolean = false;

  protected choices:number[] = [];
  protected toyform:FormGroup;

  constructor(private fb:FormBuilder, private route:ActivatedRoute, private location:Location, private msv:MarginService, private rsv:ToyService) {
    this.toyform=this.fb.group({quantity: "1"});
  }

  ngOnInit() {
    this.msv.SetVisible(true, true, false);

    this.toyid = this.route.snapshot.paramMap.get('id') as string;
    this.toy = this.rsv.getToy(this.toyid) as Toy;
    this.category = this.rsv.getCategory(this.toy.category_id).name as string;
    this.toyNumInCart = this.rsv.getToyNumInCart(this.toyid);
    this.noMoreAddInCart = (this.toyNumInCart >= this.maxNum);
    this.choices = [];
    for(let i = 1; i < (this.maxNum + 1); i++) {
      this.choices.push(i);
    }
  }

  getQuantity(){ return this.toyform.get("quantity")?.value; }

  protected backToList() { this.location.back(); }

  protected addToCart() {
    let product:Product = new Product();
    let num:number = Number( this.getQuantity() );

    if(!Number.isNaN(num)) {
      product.quantity = num;
    }
    product.toy = this.toy;

    this.rsv.AddToCart(product);
  }
  IsOverNum(num:number):boolean { return (num > (this.maxNum - this.toyNumInCart));}
}
