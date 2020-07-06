import { Component } from '@angular/core';
import { NgxsModule } from "@ngxs/store"
import { AddAnimal } from "./ngxs/animal.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})

export class AppComponent {
  title = 'angular-tour-of-heroes';
}
