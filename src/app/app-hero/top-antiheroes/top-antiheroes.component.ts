import { Component, OnInit } from '@angular/core';
import { HeroModel } from '../../models/hero.model';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-top-antiheroes',
  templateUrl: './top-antiheroes.component.html',
  styleUrls: ['./top-antiheroes.component.scss']
})
export class TopAntiheroesComponent implements OnInit {

  public top:Array<HeroModel>;

  constructor(
    private _heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  public getHeroes(): any {
    this._heroService.getHeroesJSON()
      .subscribe(resp => {
        this.top = resp;
      });
  }

}
