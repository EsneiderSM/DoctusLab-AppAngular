import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { TopAntiheroesComponent } from './top-antiheroes/top-antiheroes.component';
import { DetailHeroComponent } from './detail-hero/detail-hero.component';
import { CreateHeroComponent } from './create-hero/create-hero.component';

const routes: Routes = [
    { path: 'top', component: TopAntiheroesComponent },
    { path: 'detail/:id', component: DetailHeroComponent},
    { path: 'create', component: CreateHeroComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class HeroRoutingModule { }
