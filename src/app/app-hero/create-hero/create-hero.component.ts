import { Component, OnInit } from '@angular/core';
import { HeroModule } from '../hero.module';
import { HeroModel } from '../../models/hero.model';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.scss']
})
export class CreateHeroComponent implements OnInit {

  public hero:HeroModel = new HeroModel();

  constructor(
    private _heroService:HeroService
  ) { }

  ngOnInit() {
  }

  public onSubmit(){
    this._heroService.saveHero(this.hero);
  }

}
