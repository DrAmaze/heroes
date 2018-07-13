import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  heroes: Hero[];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.characterService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
