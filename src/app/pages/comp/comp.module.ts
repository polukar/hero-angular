import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroModule } from "../../components/hero/hero.module";
import { BrowserModule } from '@angular/platform-browser';
import { CompComponent } from "./comp.component";


@NgModule({
  imports: [
    CommonModule,
    HeroModule,
    BrowserModule
  ],
  declarations: [CompComponent],
  exports: [CompComponent]
})
export class CompModule { }
