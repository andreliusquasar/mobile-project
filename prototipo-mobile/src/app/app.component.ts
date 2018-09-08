import { Component, OnInit } from '@angular/core';
import { ContratosService } from './services/contratos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  contratos = [];

  constructor(private contratosService: ContratosService) {

  }

  ngOnInit() {
    this.contratos = this.contratosService.getContratos();
  }

}
