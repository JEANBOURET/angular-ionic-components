import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import {FormsModule} from "@angular/forms";
import { CurrencyMaskModule } from 'ng2-currency-mask/src/currency-mask.module';
import { InputCurrencyComponent } from './input-currency/input-currency.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    InputCurrencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
