import { Component, OnInit } from '@angular/core';
import { NAV } from '../../mock/mock-nav'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.styl']
})
export class NavComponent implements OnInit {

  navs = NAV

  constructor() { }

  ngOnInit(): void {
  }

  active(attr){

  }

}
