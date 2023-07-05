/* Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
Сделайте три варианта решения:  */

//1. С использованием цикла.

function sumTo1(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

//2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.

function sumTo2(n) {
  return n == 1 ? 1 : n + sumTo2(n - 1);
}

// 3. С использованием формулы арифметической прогрессии.

function sumTo3(n) {
  return (n * (n + 1)) / 2;
}

sumTo3(100); //5050
