import { Injectable } from "node_modules/@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "node_modules/rxjs";
import { map } from "node_modules/rxjs/operators";
import { HeroModel } from "../models/hero.model";

@Injectable()
export class HeroService{

    public hero:HeroModel;
    constructor(
        private _httpClient:HttpClient
    ){}

    public getHeroesJSON():Observable<any>{
        return this._httpClient.get<Array<HeroModel>>("/assets/hero.json")
        .pipe(map( resp =>{
            return resp;
        }));
    }


    public saveHero(obj: HeroModel){
        sessionStorage.setItem("hero", JSON.stringify(obj));
        this.hero = JSON.parse(sessionStorage.getItem('hero'));
    }

}