import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroModel } from '../../models/hero.model';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-detail-hero',
  templateUrl: './detail-hero.component.html',
  styleUrls: ['./detail-hero.component.scss']
})
export class DetailHeroComponent implements OnInit {

  public HEROES: Array<HeroModel>;
  public hero;

  constructor(
    private _heroService: HeroService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadHeroes();
  }

  public loadHeroes() {
    this._heroService.getHeroesJSON()
      .subscribe(resp => {
        this.HEROES = resp;
        this.showHero();
      });
  }
  public showHero() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.hero = this.HEROES.find(hero => hero.id === id);
  }

}
