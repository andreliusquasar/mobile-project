import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { Contrato } from './../models/contrato.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input()
  contratoRecebido: Contrato;

  constructor() { }

  ngOnInit() {
  }

  onEditar(formularioEditar: NgForm) {

  }

}
