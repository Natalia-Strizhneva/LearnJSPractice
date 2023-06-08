let officialNameJS = prompt("Какое «официальное» название JavaScript?", "");
if (officialNameJS == "ECMAScript") {
  alert("Верно!");
} else {
  alert("Не знаете? ECMAScript!");
}

/*Используя конструкцию if..else, напишите код, который получает число через prompt, 
а затем выводит в alert:
1, если значение больше нуля,
-1, если значение меньше нуля,
 0, если значение равно нулю.*/

let userNamber = prompt("Введите любое число", "1");
if (userNamber > 0) {
  alert(1);
} else if (userNamber < 0) {
  alert(-1);
} else {
  alert(0);
}

/*Перепишите конструкцию if с использованием условного оператора '?':
let result;
if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
} */

let result;
result = a + b < 4 ? "Мало" : "Много";

/* Перепишите if..else с использованием нескольких операторов '?'.
Для читаемости рекомендуется разбить код на несколько строк.

let message;
if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
} */

let message =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";
