import { Component, Input, OnInit } from '@angular/core';
import { Risposta } from './risposta.model';

@Component({
  selector: 'app-risposta',
  templateUrl: './risposta.component.html',
  styleUrls: ['./risposta.component.css']
})
export class RispostaComponent implements OnInit {
@Input() risposte : Risposta = undefined!;
  constructor() { }

  ngOnInit(): void {
  }

}
