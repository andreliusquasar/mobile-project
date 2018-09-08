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
  contratos = Array<Contrato>;
  cpf: string;

  constructor(private contratosService: ContratosService) { }

  ngOnInit() {
    this.contratos = this.contratosService.getContratos();
    console.log(this.contratos);
  }

  onPesquisar(formularioPesquisa: NgForm) {
  }

}
