console.log("Hello World");

function soma(a, b) {
  return a + b;
}

// arrow function
const soma = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

// funcao tradicional
const numeros = [1, 2, 3];
function dobrar(numeros) {
  numeros.map(function (num) {
    return num * 2;
  });
}

// arrow function
const dobrados = numeros.map((num) => num * 2);
