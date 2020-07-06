import { Component, OnInit } from '@angular/core';
import { HeroService } from "../../services/hero.service";
import { Hero } from "../../components/hero/hero"

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.styl']
})

export class DiComponent implements OnInit {

  title = 'Actions';

  hero: Hero[];


  constructor(private heroService: HeroService) {

  }

  /**
   *  getter action heroes
   * */

  getHeroes(): void {
    this.hero = this.heroService.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
