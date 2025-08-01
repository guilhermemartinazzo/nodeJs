import * as utils from "../utils/utils.js";
class User {
  id;
  nome;
  cpfCnpj;
  senha;
  enderecoFisico;
  idCidadeFisica;
  cepFisico;
  numeroFisico;
  compFisico;
  bairroFisico;
  ativo;
  enderecoFiscal;
  email;

  constructor(id, nome, enderecoFisico, email, senha) {
    this.id = id;
    this.nome = nome;
    this.enderecoFisico = enderecoFisico;
    this.email = email;
    this.senha = senha;
  }
}

const usuario = new User(
  1,
  "Guilherme",
  "Rua Marques de Carvalho",
  "guilhermemartinazzo@hotmail.com",
  "senha"
);
let pessoaJson = utils.toJson(usuario);
let calculoIMC = utils.calcularIMC(80,1.80);
console.log(`IMC: ${calculoIMC}` );
console.log(`JSON do objeto: ${pessoaJson}`);
