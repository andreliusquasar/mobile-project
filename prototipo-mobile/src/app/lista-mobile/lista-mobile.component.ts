import { Component, Input, OnInit } from '@angular/core';
import { Contrato } from './../models/contrato.model';

@Component({
  selector: 'app-lista-mobile',
  templateUrl: './lista-mobile.component.html',
  styleUrls: ['./lista-mobile.component.css']
})
export class ListaMobileComponent implements OnInit {

  @Input()
  recebeContratos: Array<Contrato>;

  constructor() { }

  ngOnInit() {
  }

}
