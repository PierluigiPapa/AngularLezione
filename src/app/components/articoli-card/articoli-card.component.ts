import { Component, Input, OnInit } from '@angular/core';
import { IArticoli } from 'src/app/models/articoli';


@Component({
  selector: 'app-articoli-card',
  templateUrl: './articoli-card.component.html',
  styleUrls: ['./articoli-card.component.css']
})
export class ArticoliCardComponent implements OnInit {

  constructor() { }

  @Input()
  articolo: IArticoli = {
    codart: '',
    descrizione: '',
    um: '',
    pzcart: 0,
    peso: 0,
    prezzo: 0,
    active: true,
    data: new Date (),
    imageUrl: ''
  };

  ngOnInit(): void {
  }

}
