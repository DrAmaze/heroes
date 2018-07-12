import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.characterService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
