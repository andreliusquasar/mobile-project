import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-mobile',
  templateUrl: './lista-mobile.component.html',
  styleUrls: ['./lista-mobile.component.css']
})
export class ListaMobileComponent implements OnInit {

  @Input()
  recebeContratos = [];

  constructor() { }

  ngOnInit() {
  }

}
