import { Component, Input, OnInit } from '@angular/core';
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
  recebeContratos: Array<Contrato>;

  contrato: Contrato;

  constructor(private contratoService: ContratosService) { }


  ngOnInit() {
    console.log('Contratos teste', this.recebeContratos);
  }

  private inicializaObjetos(): void {
    this.contrato.documento = new Documento();
  }

}
