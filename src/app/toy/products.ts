import { Toy } from "./toy";

export class Product {
    toy!:Toy;
    quantity!:number;

    getTotal(){ return (this.toy.price * this.quantity); }
    getTotalWithTax(){ return ((this.toy.price + Math.floor(this.toy.price * 0.1)) * this.quantity); }
}