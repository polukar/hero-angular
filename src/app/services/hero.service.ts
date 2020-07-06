import { Injectable } from '@angular/core';
import { Hero } from "../components/hero/hero"
import { HERO } from "../components/hero/mock-hero"

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[] {
    return HERO
  }

  constructor() { }
}
