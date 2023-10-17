import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class MarginService {

  headerVisible!:boolean;
  footerVisible!:boolean;
  sideVisible!:boolean;

  constructor() {
    this.headerVisible = true;
    this.footerVisible = true;
    this.sideVisible = true;
  }

  SetVisible(header:boolean, footer:boolean, side:boolean){
    this.headerVisible = header;
    this.footerVisible = footer;
    this.sideVisible = side;
  }

  getHeaderVisible():boolean { return this.headerVisible; }
  getFooterVisible():boolean { return this.footerVisible; }
  getSideVisible():boolean { return this.sideVisible; }
}
