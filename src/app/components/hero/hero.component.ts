import { Component, OnInit } from '@angular/core';
import { HERO } from './mock-hero'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.styl']
})

export class HeroComponent implements OnInit {

  hero = HERO

  constructor() { }

  ngOnInit(): void {
  }

}
