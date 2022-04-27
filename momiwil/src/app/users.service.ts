import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Users} from './users.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl : string = "https://5000-krieg2065-flaskangularp-4z0ravrs44x.ws-eu42.gitpod.io/"

  constructor(private http :HttpClient) { }
  getData(){
    let url = "https://5000-krieg2065-flaskangularp-4z0ravrs44x.ws-eu42.gitpod.io/";
    return this.http.get(url +"users");
  }
  public addUser(name: any,informatica: any,matematica: any,arte: any){
    return this.http.post<any>(this.baseUrl +"users",{name,informatica,matematica,arte}).pipe(map((Users: any) => {return Users}))
  }
}
