import { Product } from "./products";
import { Sales } from "./sales";

export class OrderHistory {

    sales:Sales = new Sales;
    productList:Product[] = [];
    totalPrice:number = 0;
    totalPriceWithTax:number = 0;
}