let userName = prompt("Введите логин");

if (userName === "admin") {
  let pasword = prompt("Введите пароль");

  if (pasword === "Я главный") {
    alert("Здравствуйте!");
  } else if (pasword === "" || pasword === null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (userName === "" || userName === null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}
