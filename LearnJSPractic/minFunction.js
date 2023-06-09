// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

min(2, 5); //2

// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

function pow(x, n) {
  const c = x ** n;
  return c;
}
pow(2, 3); //8
