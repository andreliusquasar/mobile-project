import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contrato } from './models/contrato.model';
import { ContratosService } from './services/contratos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  contratos: Array<Contrato>;
  cpf: string;
  exibirLista = false;
  pesquisou = false;
  selecionado: Contrato;
  formularioContrato: Contrato;

  constructor(private contratosService: ContratosService) { }

  ngOnInit() {
    this.contratos = this.contratosService.getContratos();
  }

  onPesquisar(formularioPesquisa: NgForm) {

    // this.contratos = this.contratosService.getContratoById(formularioPesquisa.value.cpf);

    // if (this.contratos.length > 0) {
    //   this.exibirLista = true;
    // }
  }

  recebeSelecionado(itemLista: Contrato): void {
    this.selecionado = itemLista;
    this.formularioContrato = itemLista;
  }

}
