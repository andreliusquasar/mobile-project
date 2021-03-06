import { Injectable } from '@angular/core';



@Injectable()
export class ContratosService {


  constructor() { }

  getContratos() {
    return [
      {
        cliente: {
          cnpj: '00000000000000',
          cpf: '00000000000',
          rg: '125.485.485',
          telefone: '11-32584-45875',
          celular: '11-1548-5487',
          nascimento: '10/03/1970',
          email: 'fabio@gmail.com.br',
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
          contrato: '0001',
          tipo: 'CARRO',
          fabricante: 'CHEVROLET',
          modelo: 'Corsa Sed. Maxx 1.0 / 1.0 Flexpower 8V 4P',
          ano: '2004',
          placa: 'RRRT5877',
        },
        senhas: {
          usuarioInternetChecked: true,
          usuarioInternet: 'XSDEF201',
          senhaInternetChecked: null,
          senhaInternet: null,
          senhaSegurancaChecked: null,
          senhaSeguranca: null
        }
      },
      {
        cliente: {
          cnpj: '00000000000000',
          cpf: '11111111111',
          rg: '300.128.154-5',
          telefone: '11-222-5484',
          celular: '11-9999-9999',
          nascimento: '20/06/1980',
          email: 'antonio@hotmail.com.br',
          nome: 'Antonio Alberto Oliveira'
        },
        endereco: {
          logradouro: 'Avenida Castro Alves',
          numero: '21',
          uf: 'SP',
          bairro: 'Vila Ema',
          cidade: 'São Paulo',
          cep: '01504-584'
        },
        documento: {
          contrato: '0002',
          tipo: 'UTILITARIO',
          fabricante: 'FORD',
          modelo: 'F-250 XLT 3.9 4X2 DIESEL TB',
          ano: '2011',
          placa: 'ENY4685'
        },
        senhas: {
          usuarioInternetChecked: true,
          usuarioInternet: 'EEDXOS',
          senhaInternetChecked: null,
          senhaInternet: null,
          senhaSegurancaChecked: null,
          senhaSeguranca: null
        }
      },
      {
        cliente: {
          cnpj: '00000000000000',
          cpf: '22222222222',
          rg: '487.600.000-x',
          telefone: '11-32598-9958',
          celular: '11-95487-5487',
          nascimento: '20/06/1980',
          email: 'fernanda@ig.com.br',
          nome: 'Fernanda Gomes de Castro'
        },
        endereco: {
          logradouro: 'Avenida Angélica',
          numero: '500',
          uf: 'SP',
          bairro: 'Vila Gomes',
          cidade: 'São Paulo',
          cep: '03265-6548'
        },
        documento: {
          contrato: '0003',
          tipo: 'CARRO',
          fabricante: 'HYUNDAI',
          modelo: 'HR 2.5 TCI DIESEL (RS/RD)',
          ano: '2014',
          placa: 'FWH0429'
        },
        senhas: {
          usuarioInternetChecked: true,
          usuarioInternet: 'DD5474',
          senhaInternetChecked: null,
          senhaInternet: null,
          senhaSegurancaChecked: null,
          senhaSeguranca: null
        }
      },
      {
        cliente: {
          cnpj: '11111111111111',
          cpf: '33333333333',
          rg: '658.999.365-Z',
          telefone: '11-222-5484',
          celular: '11-9999-9999',
          nascimento: '20/06/1980',
          email: 'email@exemplo.com.br',
          nome: 'Rodrigo da Silva'
        },
        endereco: {
          logradouro: 'Rua Santa Catarina',
          numero: '1235',
          uf: 'SP',
          bairro: 'São Caetano do Sul',
          cidade: 'São Paulo',
          cep: '32658-965'
        },
        documento: {
          contrato: '0004',
          tipo: 'CARRO',
          fabricante: 'FORD',
          modelo: 'F-250 XLT 3.9 4X2 DIESEL TB',
          ano: '2015',
          placa: 'DAT1829'
        },
        senhas: {
          usuarioInternetChecked: true,
          usuarioInternet: 'ODJFIS',
          senhaInternetChecked: null,
          senhaInternet: null,
          senhaSegurancaChecked: null,
          senhaSeguranca: null
        }
      },
      {
        cliente: {
          cnpj: '11111111111111',
          cpf: '00000000000',
          rg: '125.485.485',
          telefone: '11-222-5484',
          celular: '11-9999-9999',
          nascimento: '20/06/1980',
          email: 'leandro@yahoo.com.br',
          nome: 'Leandro de Castro'
        },
        endereco: {
          logradouro: 'Avenida Casa Verde',
          numero: '6584',
          uf: 'SP',
          bairro: 'Casa Verde',
          cidade: 'São Paulo',
          cep: '95847-658'
        },
        documento: {
          contrato: '0005',
          tipo: 'UTILITARIO',
          fabricante: 'HYUNDAI',
          modelo: 'HR 2.0 TCI DIESEL (RS/RD)',
          ano: '2013',
          placa: 'XIY2845'
        },
        senhas: {
          usuarioInternetChecked: true,
          usuarioInternet: '41SDD7',
          senhaInternetChecked: null,
          senhaInternet: null,
          senhaSegurancaChecked: null,
          senhaSeguranca: null
        }
      },
      {
        cliente: {
          cnpj: '33333333333333',
          cpf: '33333333333',
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
          contrato: '0006',
          tipo: 'UTILITARIO',
          fabricante: 'HYUNDAI',
          modelo: 'HR 2.0 TCI DIESEL (RS/RD)',
          ano: '2013',
          placa: 'XIY2845'
        },
        senhas: {
          usuarioInternetChecked: true,
          usuarioInternet: 'OSUS5S',
          senhaInternetChecked: null,
          senhaInternet: null,
          senhaSegurancaChecked: null,
          senhaSeguranca: null
        }
      },
      {
        cliente: {
          cnpj: '33333333333333',
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
          contrato: '0007',
          tipo: 'UTILITARIO',
          fabricante: 'HYUNDAI',
          modelo: 'HR 2.0 TCI DIESEL (RS/RD)',
          ano: '2013',
          placa: 'XIY2845'
        },
        senhas: {
          usuarioInternetChecked: false,
          usuarioInternet: 'ELDOID4',
          senhaInternetChecked: null,
          senhaInternet: null,
          senhaSegurancaChecked: null,
          senhaSeguranca: null
        }
      },
      {
        cliente: {
          cnpj: '33333333333333',
          cpf: '11111111111',
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
          contrato: '0008',
          tipo: 'UTILITARIO',
          fabricante: 'HYUNDAI',
          modelo: 'HR 2.0 TCI DIESEL (RS/RD)',
          ano: '2013',
          placa: 'XIY2845'
        },
        senhas: {
          usuarioInternetChecked: false,
          usuarioInternet: '1547SD',
          senhaInternetChecked: null,
          senhaInternet: null,
          senhaSegurancaChecked: null,
          senhaSeguranca: null
        }
      },
      {
        cliente: {
          cnpj: '33333333333333',
          cpf: '11111111111',
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
          contrato: '0009',
          tipo: 'UTILITARIO',
          fabricante: 'HYUNDAI',
          modelo: 'HR 2.0 TCI DIESEL (RS/RD)',
          ano: '2013',
          placa: 'XIY2845'
        },
        senhas: {
          usuarioInternetChecked: false,
          usuarioInternet: 'ODJF7',
          senhaInternetChecked: null,
          senhaInternet: null,
          senhaSegurancaChecked: null,
          senhaSeguranca: null
        }
      },
      {
        cliente: {
          cnpj: '44444444444444',
          cpf: '11111111111',
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
          contrato: '00010',
          tipo: 'UTILITARIO',
          fabricante: 'HYUNDAI',
          modelo: 'HR 2.0 TCI DIESEL (RS/RD)',
          ano: '2013',
          placa: 'XIY2845'
        },
        senhas: {
          usuarioInternetChecked: false,
          usuarioInternet: 'ERRUDG',
          senhaInternetChecked: null,
          senhaInternet: null,
          senhaSegurancaChecked: null,
          senhaSeguranca: null
        }
      },
      {
        cliente: {
          cnpj: '44444444444444',
          cpf: '22222222222',
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
          contrato: '00011',
          tipo: 'UTILITARIO',
          fabricante: 'HYUNDAI',
          modelo: 'HR 2.0 TCI DIESEL (RS/RD)',
          ano: '2013',
          placa: 'XIY2845'
        },
        senhas: {
          usuarioInternetChecked: false,
          usuarioInternet: 'LDJSST',
          senhaInternetChecked: null,
          senhaInternet: null,
          senhaSegurancaChecked: null,
          senhaSeguranca: null
        }
      },
      {
        cliente: {
          cnpj: '44444444444444',
          cpf: '22222222222',
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
          contrato: '00012',
          tipo: 'UTILITARIO',
          fabricante: 'HYUNDAI',
          modelo: 'HR 2.0 TCI DIESEL (RS/RD)',
          ano: '2013',
          placa: 'XIY2845'
        },
        senhas: {
          usuarioInternetChecked: false,
          usuarioInternet: '1KJGT7',
          senhaInternetChecked: null,
          senhaInternet: null,
          senhaSegurancaChecked: null,
          senhaSeguranca: null
        }
      },
      {
        cliente: {
          cnpj: '44444444444444',
          cpf: '55555555555',
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
          contrato: '00013',
          tipo: 'UTILITARIO',
          fabricante: 'HYUNDAI',
          modelo: 'HR 2.0 TCI DIESEL (RS/RD)',
          ano: '2013',
          placa: 'XIY2845'
        },
        senhas: {
          usuarioInternetChecked: false,
          usuarioInternet: '5SFF87',
          senhaInternetChecked: null,
          senhaInternet: null,
          senhaSegurancaChecked: null,
          senhaSeguranca: null
        }
      },
      {
        cliente: {
          cnpj: '44444444444444',
          cpf: '55555555555',
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
          contrato: '00014',
          tipo: 'UTILITARIO',
          fabricante: 'HYUNDAI',
          modelo: 'HR 2.0 TCI DIESEL (RS/RD)',
          ano: '2013',
          placa: 'XIY2845'
        },
        senhas: {
          usuarioInternetChecked: true,
          usuarioInternet: '68HHOF',
          senhaInternetChecked: null,
          senhaInternet: null,
          senhaSegurancaChecked: null,
          senhaSeguranca: null
        }
      }
    ];
  }

  getContratoById(cliente) {
    const key = cliente.isCpf ? 'cnpj' : 'cpf';
    const contratos = this.getContratos ();
    return contratos.filter(el => el.cliente[key] === cliente[key]);
  }

}
