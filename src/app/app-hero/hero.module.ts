import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailHeroComponent } from './detail-hero/detail-hero.component';
import { TopAntiheroesComponent } from './top-antiheroes/top-antiheroes.component';
import { HeroRoutingModule } from './hero-routing.module';
import { CreateHeroComponent } from './create-hero/create-hero.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    HeroRoutingModule,
    FormsModule
  ],
  declarations: [
    DetailHeroComponent,
    TopAntiheroesComponent,
    CreateHeroComponent
  ]
})
export class HeroModule { }
