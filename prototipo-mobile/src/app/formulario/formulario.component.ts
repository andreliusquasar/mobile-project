import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { Cliente } from '../models/cliente.model';
import { Documento } from '../models/documento.model';
import { Endereco } from '../models/endereco.model';
import { Senha } from '../models/senha.model';
import { Contrato } from './../models/contrato.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  contrato: Contrato;

  constructor() { }

  ngOnInit() {
   this.inicializaComponents();
  }

  onEditar(formularioEditar: NgForm) {

  }

  private inicializaComponents(): void {
    this.contrato = new Contrato();
    this.contrato.cliente = new Cliente();
    this.contrato.documento = new Documento();
    this.contrato.endereco = new Endereco();
    this.contrato.senhas = new Senha();
  }

}
