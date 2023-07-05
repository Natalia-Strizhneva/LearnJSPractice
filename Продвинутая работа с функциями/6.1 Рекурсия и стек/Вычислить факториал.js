/* n! = n * (n - 1) * (n - 2) * ...*1
Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию. */

function factorial(n) {
  return n == 1 ? 1 : n * factorial(n - 1);
}

factorial(4); //24
