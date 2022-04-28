import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Users} from './users.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl : string = "https://5000-krieg2065-flaskangularp-27tm9bph13n.ws-eu43.gitpod.io/"

  constructor(private http :HttpClient) { }
  getData(){
    let url = "https://5000-krieg2065-flaskangularp-27tm9bph13n.ws-eu43.gitpod.io/";
    return this.http.get(url +"users");
  }
  public addUser(user: any,informatica: any,matematica: any,arte: any){
    return this.http.post<any>(this.baseUrl +"usersRec",{user,informatica,matematica,arte}).pipe(map((Users: any) => {return Users}))
  }
}
