function soldado(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Soldado ${id} finalizou a missão`);
      resolve(id);
    }, 1000);
  });
}

async function exerciciosEmSerie() {
  let tempo = Date.now();
  console.log("Inícia da missão em série");
  const missaoSoldado = await soldado(1);
  const missaoSoldado2 = await soldado(2);
  const missaoSoldado3 = await soldado(3);
  let tempoFim = Date.now();
  console.log(
    "Tempo decorrido em série: " + ((tempoFim - tempo) / 1000).toFixed(4)
  );
}

exerciciosEmSerie();

async function exerciciosEmParalelo() {
  console.log("Início da missão em paralelo");
  let tempo = Date.now();
  const resultado = await Promise.all([soldado(4), soldado(5), soldado(6)]);
  let tempoFim = Date.now();
  console.log(
    "Tempo decorrido paralelo: " + ((tempoFim - tempo) / 1000).toFixed(4)
  );
}

exerciciosEmParalelo();
