import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../node_modules/@angular/forms';
import { ContratosService } from './services/contratos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  contratos = [];
  cpf: string;

  constructor(private contratosService: ContratosService) { }

  ngOnInit() {
    this.contratos = this.contratosService.getContratos();
  }

  onPesquisar(formularioPesquisa: NgForm) {
  }

}
