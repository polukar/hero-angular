import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from "./hero.component"
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [HeroComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HeroModule { }
