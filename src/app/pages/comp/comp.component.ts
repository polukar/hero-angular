import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.styl']
})
export class CompComponent implements OnInit {

  title = "Components"

  constructor() { }

  ngOnInit(): void {
  }

}
