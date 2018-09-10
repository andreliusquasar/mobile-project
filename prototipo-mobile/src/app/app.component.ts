import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MaterializeAction } from 'angular2-materialize';
import { Cliente } from './models/cliente.model';
import { Contrato } from './models/contrato.model';
import { Documento } from './models/documento.model';
import { Endereco } from './models/endereco.model';
import { Senha } from './models/senha.model';
import { ContratosService } from './services/contratos.service';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  contratos: Array<Contrato>;
  cpf: string;
  exibirLista = false;
  exibirForm = false;
  pesquisou = false;
  contrato: Contrato;
  formularioContrato: Contrato;

  public mask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/,];

  // MODAL
  modalActions = new EventEmitter<string | MaterializeAction>();
  openModal() {
    this.modalActions.emit({ action: 'modal', params: ['open'] });
  }
  closeModal() {
    this.modalActions.emit({ action: 'modal', params: ['close'] });
    this.exibirForm = false;
    this.inicializarObjetos();
    this.contrato.cliente.cpf = '';
  }
  // MODAL

  constructor(private contratosService: ContratosService) {}

  ngOnInit() {
    this.inicializarObjetos();
  }

  onPesquisar(formularioPesquisa: NgForm) {
    this.exibirForm = false;
    this.contratos = this.contratosService.getContratoById(
      formularioPesquisa.value.cpf
    );
    if (this.contratos.length > 0) {
      this.exibirLista = true;
    }
  }

  onEditar(formularioEdicao: NgForm) {
    this.openModal();
  }

  getItemLista(contrato: Contrato): void {
    console.log(contrato);
    if (contrato) {
      this.exibirLista = false;
      this.exibirForm = true;
      this.contrato = contrato;
    }
  }

  private inicializarObjetos(): void {
    this.contrato = new Contrato();
    this.contrato.cliente = new Cliente();
    this.contrato.documento = new Documento();
    this.contrato.endereco = new Endereco();
    this.contrato.senhas = new Senha();
  }

  mascara(cpf: string) {
    console.log(cpf);
  }


}
