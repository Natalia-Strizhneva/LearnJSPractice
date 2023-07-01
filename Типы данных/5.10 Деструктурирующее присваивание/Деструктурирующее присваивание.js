let user = { userName: "John", years: 30 };

let { userNameame, years: age, isAdmin = false } = user;

alert(userNameame); // John
alert(age); // 30
alert(isAdmin); // false
