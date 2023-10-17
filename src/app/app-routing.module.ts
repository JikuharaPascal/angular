import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ToyListComponent } from './toy-list/toy-list.component';
import { ToyDataComponent } from './toy-data/toy-data.component';
import { CartComponent } from './cart/cart.component';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';
import { CartOrderhistoryComponent } from './cart-orderhistory/cart-orderhistory.component';
import { UserComponent } from './user/user.component';
import { UserChangepasswordComponent } from './user-changepassword/user-changepassword.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot ([
        {path:"", redirectTo:'/toy-list', pathMatch:'full'},
        {path:"toy-list", component:ToyListComponent},
        {path:"toy-data/:id", component:ToyDataComponent},
        {path:"cart", component:CartComponent},
        {path:"cart-checkout", component:CartCheckoutComponent},
        {path:"cart-orderhistory", component:CartOrderhistoryComponent},
        {path:"user", component:UserComponent},
        {path:"user-changepassword", component:UserChangepasswordComponent},
        {path:"user-settings", component:UserSettingsComponent}
      ])
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
