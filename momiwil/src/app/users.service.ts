import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Users} from './users.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl : string = "https://5000-krieg2065-flaskangularp-efhw8vkmlfa.ws-eu43.gitpod.io/"

  constructor(private http :HttpClient) { }
  getData(){
    let url = "https://5000-krieg2065-flaskangularp-efhw8vkmlfa.ws-eu43.gitpod.io/";
    return this.http.get(url +"users2");
  }
  public addUser(name: any,informatica: any,matematica: any,arte: any){
    return this.http.put<any>(this.baseUrl +"users1",{name,informatica,matematica,arte}).pipe(map((Users: any) => {return Users}))
  }
}
