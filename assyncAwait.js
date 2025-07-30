const promiseSuccess = new Promise((ok, error) => {
  setTimeout(() => {
    ok("Executou promise");
  }, 1000);
});

const promiseSuccess2 = new Promise((ok, error) => {
  setTimeout(() => {
    ok("Executou promise 2");
  }, 1000);
});

async function main() {
  result = await promiseSuccess;
  console.log(result);

  result2 = await promiseSuccess2;
  console.log(result2);
}

main()
