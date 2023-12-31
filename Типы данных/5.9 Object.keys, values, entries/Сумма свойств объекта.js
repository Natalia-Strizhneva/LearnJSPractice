/*Напишите функцию sumSalaries(salaries), 
которая возвращает сумму всех зарплат с помощью метода Object.values 
и цикла for..of.*/

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
function sumSalaries(salaries) {
  let sum = 0;

  for (let value of Object.values(salaries)) {
    sum += value;
  }
  return sum;
}
alert(sumSalaries(salaries)); // 650

// либо используем reduce, который перебирает массив значений salaries,
// складывает их
// и возвращает результат
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0); // 650
}
