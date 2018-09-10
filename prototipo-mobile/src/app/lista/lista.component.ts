import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Documento } from '../models/documento.model';
import { ContratosService } from '../services/contratos.service';
import { Contrato } from './../models/contrato.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input()
  contratoRecebido: Array<Contrato>;

  @Output()
  selecionado: EventEmitter<Contrato> = new EventEmitter<Contrato>();

  contrato: Contrato;

  constructor(private contratoService: ContratosService) { }


  ngOnInit() {
    // console.log('Contratos teste', this.recebeContratos);
  }

  getItemLista(contrato: Contrato): void {
    this.selecionado.emit(contrato);
  }


  private inicializaObjetos(): void {
    this.contrato.documento = new Documento();
  }

}
