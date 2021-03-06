import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes : Hero[];
  hero : Hero = {
    id: 1,
    name: 'Windstorm'
  };
  
  ngOnInit() : void {
    this.getHeroes();
  }
  
  constructor(
    private heroService: HeroService,
    private router: Router) { }
  
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
