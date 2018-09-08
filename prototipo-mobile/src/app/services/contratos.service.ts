import { Injectable } from '@angular/core';



@Injectable()
export class ContratosService {


  constructor() { }

  getContratos() {
    return [
      {
        cliente: {
          cpf: '00000000000',
          rg: '125.485.485',
          telefone: '11-222-5484',
          celular: '11-9999-9999',
          nascimento: '20/06/1980',
          email: 'email@exemplo.com.br',
          nome: 'Fabio Castro Gomes'
        },
        endereco: {
          logradouro: 'Ruas Estrada São Caetano',
          numero: '222',
          uf: 'SP',
          bairro: 'Vila Gomes',
          cidade: 'São Paulo',
          cep: '00000000'
        },
        documento: {
          contrato: '671167',
          tipo: 'CARRO',
          fabricante: 'CHEVROLET',
          modelo: 'Corsa Sed. Maxx 1.0 / 1.0 Flexpower 8V 4P',
          ano: '2004',
          placa: 'RRRT5877',
        },
        senhas: {
          usuarioInternetChecked: null,
          usuarioInternet: null,
          senhaInternetChecked: null,
          senhaInternet: null,
          senhaSegurancaChecked: null,
          senhaSeguranca: null
        }
      },
      {
        cliente: {
          cpf: '11111111111',
          rg: '125.485.485',
          telefone: '11-222-5484',
          celular: '11-9999-9999',
          nascimento: '20/06/1980',
          email: 'email@exemplo.com.br',
          nome: 'Antonio Alberto Oliveira'
        },
        endereco: {
          logradouro: 'Ruas Estrada São Caetano',
          numero: '222',
          uf: 'SP',
          bairro: 'Vila Gomes',
          cidade: 'São Paulo',
          cep: '00000000'
        },
        documento: {
          contrato: '671191',
          tipo: 'UTILITARIO',
          fabricante: 'FORD',
          modelo: 'F-250 XLT 3.9 4X2 DIESEL TB',
          ano: '2011',
          placa: 'ENY4685'
        },
        senhas: {
          usuarioInternetChecked: null,
          usuarioInternet: null,
          senhaInternetChecked: null,
          senhaInternet: null,
          senhaSegurancaChecked: null,
          senhaSeguranca: null
        }
      },
      {
        cliente: {
          cpf: '22222222222',
          rg: '125.485.485',
          telefone: '11-222-5484',
          celular: '11-9999-9999',
          nascimento: '20/06/1980',
          email: 'email@exemplo.com.br',
          nome: 'Fernanda Gomes de Castro'
        },
        endereco: {
          logradouro: 'Ruas Estrada São Caetano',
          numero: '222',
          uf: 'SP',
          bairro: 'Vila Gomes',
          cidade: 'São Paulo',
          cep: '00000000'
        },
        documento: {
          contrato: '671608',
          tipo: 'UTILITARIO',
          fabricante: 'HYUNDAI',
          modelo: 'HR 2.5 TCI DIESEL (RS/RD)',
          ano: '2014',
          placa: 'FWH0429'
        },
        senhas: {
          usuarioInternetChecked: null,
          usuarioInternet: null,
          senhaInternetChecked: null,
          senhaInternet: null,
          senhaSegurancaChecked: null,
          senhaSeguranca: null
        }
      },
      {
        cliente: {
          cpf: '33333333333',
          rg: '125.485.485',
          telefone: '11-222-5484',
          celular: '11-9999-9999',
          nascimento: '20/06/1980',
          email: 'email@exemplo.com.br',
          nome: 'Rodrigo da Silva'
        },
        endereco: {
          logradouro: 'Ruas Estrada São Caetano',
          numero: '222',
          uf: 'SP',
          bairro: 'Vila Gomes',
          cidade: 'São Paulo',
          cep: '00000000'
        },
        documento: {
          contrato: '671899',
          tipo: 'CARRO',
          fabricante: 'FORD',
          modelo: 'F-250 XLT 3.9 4X2 DIESEL TB',
          ano: '2015',
          placa: 'DAT1829'
        },
        senhas: {
          usuarioInternetChecked: null,
          usuarioInternet: null,
          senhaInternetChecked: null,
          senhaInternet: null,
          senhaSegurancaChecked: null,
          senhaSeguranca: null
        }
      },
      {
        cliente: {
          cpf: '00000000000',
          rg: '125.485.485',
          telefone: '11-222-5484',
          celular: '11-9999-9999',
          nascimento: '20/06/1980',
          email: 'email@exemplo.com.br',
          nome: 'Leandro de Castro'
        },
        endereco: {
          logradouro: 'Ruas Estrada São Caetano',
          numero: '222',
          uf: 'SP',
          bairro: 'Vila Gomes',
          cidade: 'São Paulo',
          cep: '00000000'
        },
        documento: {
          contrato: '671578',
          tipo: 'UTILITARIO',
          fabricante: 'HYUNDAI',
          modelo: 'HR 2.0 TCI DIESEL (RS/RD)',
          ano: '2013',
          placa: 'XIY2845'
        },
        senhas: {
          usuarioInternetChecked: null,
          usuarioInternet: null,
          senhaInternetChecked: null,
          senhaInternet: null,
          senhaSegurancaChecked: null,
          senhaSeguranca: null
        }
      }

    ];
  }

  getContratoById(id: string) {
    // const contratos = this.getContratos();
    // let result;
    // result = contratos.filter(el => {
    //   return id === el.cpf;
    // });
    // return result;
  }

}
