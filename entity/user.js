import * as utils from "../utils/utils.js";
console.log (utils.calcularIMC(80,1.77));
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
console.log(utils.toJson(usuario));
