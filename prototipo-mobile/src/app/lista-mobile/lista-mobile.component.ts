import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contrato } from './../models/contrato.model';

@Component({
  selector: 'app-lista-mobile',
  templateUrl: './lista-mobile.component.html',
  styleUrls: ['./lista-mobile.component.css']
})
export class ListaMobileComponent implements OnInit {

  @Input()
  contratoRecebido: Array<Contrato>;

  @Output()
  selecionado: EventEmitter<Contrato> = new EventEmitter<Contrato>();

  constructor() { }

  ngOnInit() {
  }

  getItemLista(contrato: Contrato): void {
    this.selecionado.emit(contrato);
  }

}
