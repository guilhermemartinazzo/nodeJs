function cozinhar(item, tempo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Preparando ${item}`);
      resolve({ item: item, tempo: tempo });
    }, tempo);
  });
}

async function cozinharEmSerie() {
  const init = Date.now();
  const ovos = await cozinhar("Ovos mexidos", 2000);
  const bacon = await cozinhar("Bacon", 1000);
  const cafe = await cozinhar("Café", 3000);
  console.log(`Tempo para cozinhar em série: ${Date.now() - init}`);
}

cozinharEmSerie();

async function cozinharEmParalelo() {
  const init = Date.now();
  const result = Promise.all([
    cozinhar("Ovos Mexidos", 2000),
    cozinhar("Bacon", 1000),
    cozinhar("Café", 3000),
  ]).then((e) => {
    console.log(`Tempo para cozinhar em paralelo: ${Date.now() - init}`);
    console.log(e);
  });
}

cozinharEmParalelo();
