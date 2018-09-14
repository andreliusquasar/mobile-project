import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from './models/cliente.model';
import { Contrato } from './models/contrato.model';
import { Documento } from './models/documento.model';
import { Endereco } from './models/endereco.model';
import { Senha } from './models/senha.model';
import { ContratosService } from './services/contratos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contratos: Array<Contrato>;
  exibirLista = false;
  exibirForm = false;
  contrato: Contrato;
  isCpf = false;

  readonly mask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  constructor(private contratosService: ContratosService) {}

  ngOnInit() {
    this.inicializarObjetos();
  }

  onPesquisar(formularioPesquisa: NgForm) {
    this.exibirForm = false;
    this.contratos = this.contratosService.getContratoById(formularioPesquisa.value);
    if (this.contratos.length > 0) {
      this.exibirLista = true;
      console.log(this.contratos);
    }
  }

  private inicializarObjetos(): void {
    this.contrato = new Contrato();
    this.contrato.cliente = new Cliente();
    this.contrato.documento = new Documento();
    this.contrato.endereco = new Endereco();
    this.contrato.senhas = new Senha();
  }

  recebeContratoFilho(contrato: Contrato) {
    if (contrato) {
      this.contrato = contrato;
      this.exibirLista = false;
      this.exibirForm = true;
      }
  }

  acionaModal(actionModal ) {
    if (actionModal && actionModal.params[0] === 'close') {
      this.exibirForm = false;
      this.exibirLista = false;
      this.contrato.cliente.cpf = null;
    }
  }

  validaSwitch(cpf) {
    this.reiniciaComponents();
    if (cpf) {
      this.contrato.cliente.cnpj = null;
      return;
    }
    this.contrato.cliente.cpf = null;
  }

  private reiniciaComponents() {
    this.contratos = [];
    this.exibirForm = false;
    this.exibirLista = false;
  }


}
