const user = {};
user.name = "Jhon";
user.surname = "Smith";

for (let key in user) {
  console.log(key, user[key]);
}
/* name Jhon
surname Smith */

user.name = "Peter";

for (let key in user) {
  console.log(key, user[key]);
}
/* name Peter
surname Smith */

delete user.name;

for (let key in user) {
  console.log(key, user[key]);
}

// surname Smith
