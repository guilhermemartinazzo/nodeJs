function calcularIMC(peso, altura) {
  if (peso && altura && typeof peso == "number" && typeof altura == "number") {
    return (peso / Math.pow(altura, 2)).toFixed(2);
  } else {
    console.log("Peso e altura inválidos!");
  }
}

function toJson(obj) {
  return JSON.stringify(obj);
}
export { calcularIMC, toJson };
