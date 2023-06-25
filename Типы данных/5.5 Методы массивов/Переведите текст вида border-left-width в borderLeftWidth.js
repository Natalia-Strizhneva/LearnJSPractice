/*Напишите функцию camelize(str), которая преобразует строки 
вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву. */

function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

camelize("background-color") == "backgroundColor";
camelize("list-style-image") == "listStyleImage";
camelize("-webkit-transition") == "WebkitTransition";
