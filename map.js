const randomNumbers = Math.random * 10;
const numberList = [1, 2, 3, 4, 5];
const numberListRandom = createRandomNumbers(5, 100);
const dobrado = numberList.map((num) => num * 2);
const numerosRandom = numberListRandom.map((num) => num * 1);
console.log(dobrado);
console.log(numerosRandom);

function createRandomNumbers(quantity, limit) {
  let numbers = [];
  for (e = quantity; e >= 0; e--) {
    let num = Math.floor(Math.random() * limit);
    numbers.push(num);
  }
  return numbers;
}
