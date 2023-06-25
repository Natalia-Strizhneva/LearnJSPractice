/*Напишите функцию isEmpty(obj), которая возвращает true, 
если у объекта нет свойств, иначе false.*/

function isEmpty(obj) {
  for (let key in obj) {
    return false; //  если выполнится - значит в объекте есть свойства
  }
  return true;
}

let schedule = {};
alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";
alert(isEmpty(schedule)); // false
