import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http :HttpClient) { }
  getData(){
    let url = "https://5000-krieg2065-flaskangularp-bta2pn3u09m.ws-eu42.gitpod.io/";
    return this.http.get(url);
  }
}
