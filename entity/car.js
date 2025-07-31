class Car {
  velocidade = 0;
  marca;
  modelo;
  ano;
  velMaxima = 200;

  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  setVelocidadeMaxima(velMaxima) {
    this.velMaxima = velMaxima;
  }

  acelerar(vel) {
    if (this.velocidade + vel <= this.velMaxima) {
      this.velocidade = this.velocidade + vel;
    }
  }

  frear(vel) {
    if (this.velocidade > 0 && this.velocidade - vel >= 0) {
      this.velocidade = this.velocidade - vel;
    }
  }
}
exports.car = this;
