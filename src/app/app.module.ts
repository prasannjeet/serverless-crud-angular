import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CrudService } from './services/crud.service';
import { IfaceComponent } from './components/iface/iface.component';

@NgModule({
  declarations: [
    AppComponent,
    IfaceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
