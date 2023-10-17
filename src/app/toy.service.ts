import { Injectable } from '@angular/core';
import { Toy } from './toy/toy';
import { TOYDATA } from './toy/toydata';
import { MenuData } from './toy/menudata';
import { Category } from './toy/category';
import { CATEGORYDATA } from './toy/categorydata';
import { Product } from './toy/products';
import { PAYMENTMETHODDATA } from './toy/paymentmethoddata';
import { PaymentMethod } from './toy/paymentmethod';
import { Sales } from './toy/sales';
import { SaleItems } from './toy/sale_items';
import { OrderHistory } from './toy/orderhistory';


@Injectable({providedIn: 'root'})
export class ToyService {
  protected toydata:Toy[]=TOYDATA;
  protected categorydata:Category[]=CATEGORYDATA;
  protected paymentMethodData:PaymentMethod[]=PAYMENTMETHODDATA;

  // 検索名
  protected currentSearchName:string="";

  // カート内商品
  protected productlist:Product[] = [];
  // カート内金額
  protected totalPrice:number = 0;
  protected totalPriceWithTax:number = 0;


  // 購買履歴情報
  protected salesList:Sales[] = [];
  protected salesId:number = 1;

  // 購買情報
  protected saleItemsList:SaleItems[] = [];
  protected saleItemsId:number = 1;

  constructor() { }

  getCurrentSearchName() { return this.currentSearchName; };
  setCurrentSearchName(keyword:string) { this.currentSearchName = keyword; };

  getToydata():Toy[]{ return this.toydata; }

  getToy(id:string):Toy{ return this.toydata.find(toy=>toy.id.toString()==id) as Toy; }

  getToydataOrderbyDisplay():MenuData[]{
      let toydata = this.getToydata();
      let categorydata = this.categorydata.sort((a,b)=> a.display_order + b.display_order);

      let menudata:MenuData[] = [];
      categorydata.forEach((category) => {
        let data:MenuData = new MenuData();
        data.name = category.name;
        data.toydata = [];

        toydata.forEach( (toy) => {
            if(toy.category_id != category.id) { return; }

            if(this.getCurrentSearchName() != "") {
                let target = toy.name.toLowerCase();
                let word = this.getCurrentSearchName().toLowerCase();
                if(target.indexOf(word) < 0){ return; }
            }
            data.toydata.push(toy);
        });

        if(data.toydata.length > 0) {
          menudata.push(data);
        }
      });
      return menudata;
  }

  getCategorydata():Category[] { return this.categorydata; }
  getCategory(id:number):Category { return this.categorydata.find(category=>category.id==id) as Category; }

  getPaymentMethodData():PaymentMethod[] { return this.paymentMethodData; }
  getPaymentMethod(id:number):PaymentMethod { return this.paymentMethodData.find(method=>method.id==id)as PaymentMethod; }

  getSalesList():Sales[] { return this.salesList; }
  getSaleItemList():SaleItems[] { return this.saleItemsList; }


  getSaleItemListSelectById(saleId:number):SaleItems[] {
      let saleItems:SaleItems[] = [];

      this.saleItemsList.forEach( (saleItem)=>{
          if(saleItem.sale_id != saleId){ return; }
      });
      return saleItems;
  }

  getProductlist():Product[] { return this.productlist; }
  getNumInCart():number { return this.productlist.length; }
  getTotalPriceInCart():number { return this.totalPrice; }
  getTotalPriceWithTaxInCart():number { return this.totalPriceWithTax; }

  AddToCart(product:Product):void {
    // 既に商品があったら個数を増やして終了
    for (let i = 0; i < this.productlist.length; i++) {
        if(this.productlist[i].toy.id != product.toy.id) { continue; }
        this.productlist[i].quantity += product.quantity;
        this.calcTotalPrice();
        return;
    }

    this.productlist.push(product);
    this.calcTotalPrice();
  }

  RemoveToCart(product:Product):void {
    let index = this.productlist.findIndex(n => n.toy.id == product.toy.id);
    this.productlist.splice(index, 1);
    this.calcTotalPrice();
  }

  Purchase(paymentMethod:number):void{

    let sales = new Sales();
    sales.id = this.salesId;
    sales.date = new Date().toString();
    sales.payment_id = paymentMethod;
    sales.user_id = 1;

    this.productlist.forEach((product)=>{
        let saleItems = new SaleItems();
        saleItems.id = this.saleItemsId;
        saleItems.item_id = product.toy.id;
        saleItems.price = product.toy.price;
        saleItems.quantity = product.quantity;
        saleItems.sale_id = sales.id;
        this.saleItemsList.push(saleItems);

        this.saleItemsId++;
    });

    this.salesList.push(sales);
    this.salesId++;
    // 空にする
    this.productlist = [];
  }

  protected calcTotalPrice():void {
    this.totalPrice = 0;
    this.totalPriceWithTax = 0;

    this.productlist.forEach( (product)=>{
        this.totalPrice += product.getTotal();
        this.totalPriceWithTax += product.getTotalWithTax();
    });
  }

  getOrderList(userId:number):OrderHistory[] {
    let list:OrderHistory[] =[];
    let saleDataList:Sales[] = this.getSalesDataList(userId);

    saleDataList.forEach((saleData)=>{
        let order:OrderHistory = new OrderHistory();
        order.sales = saleData;

        let productList:Product[] = [];
        let saleItemsList:SaleItems[] = this.getSaleItemDataList(saleData.id);
        saleItemsList.forEach((saleItem)=>{
            let product:Product = new Product();
            product.toy = this.getToy(saleItem.item_id.toString());
            product.quantity = saleItem.quantity;

            order.totalPrice += product.getTotal();
            order.totalPriceWithTax += product.getTotalWithTax();
            productList.push(product);
        });

        order.productList = productList;
        list.push(order);
    });
    return list;
  }

  getSalesDataList(userId:number):Sales[]{
    let list:Sales[] =[];
    this.salesList.forEach((sale)=>{
      if(sale.user_id === userId){
        list.push(sale);
      }
    });
    return list;
  }

  getSaleItemDataList(salesId:number):SaleItems[] {
    let list:SaleItems[] = [];
    this.saleItemsList.forEach((item)=>{
        if(item.sale_id === salesId){
          list.push(item);
        }
    });

    return list;
  }
}
