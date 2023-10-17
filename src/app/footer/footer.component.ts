import { Component } from '@angular/core';
import { MarginService } from '../margin.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private msv:MarginService){}

  IsVisible():boolean { return this.msv.getFooterVisible(); }
}
