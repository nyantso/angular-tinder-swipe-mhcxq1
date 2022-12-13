import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports:      [ 
    BrowserModule,
     BrowserAnimationsModule,
     FormsModule ],
  declarations: [ AppComponent,  CardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
