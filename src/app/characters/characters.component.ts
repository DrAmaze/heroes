import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.characterService.addHero({ name }) as Hero).subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.characterService.deleteHero(hero).subscribe();
  }
}
