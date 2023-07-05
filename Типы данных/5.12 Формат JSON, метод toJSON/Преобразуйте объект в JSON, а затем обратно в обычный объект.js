//Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35,
};

let json = JSON.stringify(user);
let newUser = JSON.parse(json);

//or

let user2 = JSON.parse(JSON.stringify(user));
