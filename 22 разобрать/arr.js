function sumInput() {
  let numbers = [];

  while (true) {
    let a = prompt("Введите число", 0);
    if (a === "" || a === null || !isFinite(a)) break;
    numbers.push(+a);
  }
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
alert(sumInput());
