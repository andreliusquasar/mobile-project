import { Injectable } from '@angular/core';

@Injectable()
export class ContratosService {

  constructor() { }

  getContratos() {
    return [
      {
        contrato: '671167',
        tipo: 'CARRO',
        fabricante: 'CHEVROLET',
        modelo: 'Corsa Sed. Maxx 1.0 / 1.0 Flexpower 8V 4P',
        ano: '2004',
        placa: 'RRRT5877'
      },
      {
        contrato: '671191',
        tipo: 'UTILITARIO',
        fabricante: 'FORD',
        modelo: 'F-250 XLT 3.9 4X2 DIESEL TB',
        ano: '2011',
        placa: 'ENY4685'
      },
      {
        contrato: '671608',
        tipo: 'UTILITARIO',
        fabricante: 'HYUNDAI',
        modelo: 'HR 2.5 TCI DIESEL (RS/RD)',
        ano: '2014',
        placa: 'FWH0429'
      },
      {
        contrato: '671899',
        tipo: 'CARRO',
        fabricante: 'FORD',
        modelo: 'F-250 XLT 3.9 4X2 DIESEL TB',
        ano: '2015',
        placa: 'DAT1829'
      },
      {
        contrato: '671578',
        tipo: 'UTILITARIO',
        fabricante: 'HYUNDAI',
        modelo: 'HR 2.0 TCI DIESEL (RS/RD)',
        ano: '2013',
        placa: 'XIY2845'
      }

    ];
  }

}
