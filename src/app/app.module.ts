import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToyListComponent } from './toy-list/toy-list.component';
import { ToyDataComponent } from './toy-data/toy-data.component';
import { ToyService } from './toy.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideComponent } from './side/side.component';
import { CartComponent } from './cart/cart.component';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';
import { MarginService } from './margin.service';
import { CartOrderhistoryComponent } from './cart-orderhistory/cart-orderhistory.component';
import { UserComponent } from './user/user.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserChangepasswordComponent } from './user-changepassword/user-changepassword.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    ToyListComponent,
    ToyDataComponent,
    HeaderComponent,
    FooterComponent,
    SideComponent,
    CartComponent,
    CartCheckoutComponent,
    CartOrderhistoryComponent,
    UserComponent,
    UserSettingsComponent,
    UserChangepasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    MarginService,
    ToyService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
