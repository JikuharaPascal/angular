import { Component } from '@angular/core';
import { MarginService } from '../margin.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private msv:MarginService){}

  ngOnInit() {
    this.msv.SetVisible(true, true, false);
  }
}
