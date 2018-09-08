import { Component, Input, OnInit } from '@angular/core';
import { ContratosService } from '../services/contratos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input()
  recebeContratos = [];

  constructor(private contratoService: ContratosService) { }


  ngOnInit() {
    this.recebeContratos = this.contratoService.getContratos();
    console.log('Contratos teste', this.recebeContratos);
  }

}
