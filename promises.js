/*  Crie um laço infinito que rodará até 1 minuto imprimindo “processando” e uma função de timer passada como callback
que roda a cada 5 segundos imprimindo “callback”.
*/
const promiseSuccess = new Promise((ok, error) => {
  setTimeout(() => {
    ok("Executou promise");
  }, 1000);
});

const promiseError = new Promise((ok, error) => {
  setInverval(() => {
    error("Deu certo");
  }, 1000);
});

promiseSuccess
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  })
  .finally(() => {
    console.log("finally");
  });
promiseError
  .then((result) => {
    console.log("Success");
  })
  .catch((err) => {
    console.log(`Erro ${err}`);
  });
