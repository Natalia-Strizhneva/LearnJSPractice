/*Создайте функцию topSalary(salaries), которая возвращает имя самого 
высокооплачиваемого сотрудника.
Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них. */

function topSalary(salaries) {
  let max = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

topSalary(salaries); // Pete
