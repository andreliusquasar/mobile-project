import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
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

  @Input()
  contratosRecebidos: Array<Contrato>;

  @Output()
  modalActions = new EventEmitter<string | MaterializeAction>();

  constructor() { }

  ngOnInit() {
    console.log(this.contratoRecebido);
  }

  onEditar(formularioEditar: NgForm) {
    this.openModal();
  }

  openModal() {
    this.modalActions.emit({ action: 'modal', params: ['open'] });
  }

  closeModal() {
    this.modalActions.emit({ action: 'modal', params: ['close'] });
  }

}
