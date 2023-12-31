/*Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. 
Иногда это 30, 31 или даже февральские 28/29. */

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0); //Создадим дату из следующего месяца, но в день передадим 0:
  //это значение будет соответствовать «один день перед первым числом месяца», т.е. «последнее число прошлого месяца».
  return date.getDate();
}

getLastDayOfMonth(2012, 1); // 29
