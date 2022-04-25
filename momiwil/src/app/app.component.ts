import { Component } from '@angular/core';
import { Risposta } from './risposta/risposta.model';
import {UsersService} from "./users.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "momiwil";
  risposte: Risposta[];

  constructor(private users : UsersService){
    this.users.getData().subscribe((data: any) =>{
      console.warn(data)
    })
    this.risposte = [];
  }

addArticle(matematica: HTMLInputElement, arte: HTMLInputElement, informatica: HTMLInputElement, lingue: HTMLInputElement): boolean {
console.log(`matematica: ${matematica.value} arte: ${arte.value}, informatica : ${informatica.value}, lingue : ${lingue.value}`);
this.risposte.push(new Risposta (matematica.value, arte.value,informatica.value, lingue.value));
return false;
}
}
