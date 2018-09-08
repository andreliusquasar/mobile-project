import { Cliente } from './cliente.model';
import { Documento } from './documento.model';
import { Endereco } from './endereco.model';
import { Senha } from './senha.model';

export class Contrato {

 cliente: Cliente;

 documento: Documento;

 endereco: Endereco;

 senhas: Senha;

}
