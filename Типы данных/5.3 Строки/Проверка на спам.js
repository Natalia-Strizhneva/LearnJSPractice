/*Напишите функцию checkSpam(str), возвращающую true, 
если str содержит 'viagra' или 'XXX', а иначе false.
Функция должна быть нечувствительна к регистру: */

function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

checkSpam("buy ViAgRA now") == true;
checkSpam("free xxxxx") == true;
checkSpam("innocent rabbit") == false;

/* метод .includes() возвращает true,
 если в строке str есть подстрока substr, либо false, если нет.
 Поэтому не нужны доп условия для решения данной задачи*/
