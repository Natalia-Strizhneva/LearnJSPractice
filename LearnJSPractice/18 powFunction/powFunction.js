// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

function pow(x, n) {
  const c = x ** n;
  return c;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert(pow(x, n));
}

pow(2, 3); //8
