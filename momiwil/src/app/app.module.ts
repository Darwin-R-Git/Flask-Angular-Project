import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { RispostaComponent } from './risposta/risposta.component';

@NgModule({
  declarations: [
    AppComponent,
    RispostaComponent,
    HttpClientModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
