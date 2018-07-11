import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  selectedHero: Hero;
  heroes = HEROES;

  constructor() { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit() {
  }

}
