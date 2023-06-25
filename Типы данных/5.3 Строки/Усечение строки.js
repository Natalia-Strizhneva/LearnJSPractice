/* Создайте функцию truncate(str, maxlength), 
которая проверяет длину строки str и, если она превосходит maxlength, 
заменяет конец str на "…", так, чтобы её длина стала равна maxlength.*/

function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "..." : str;
}
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20); //'Вот, что мне хотело...'
