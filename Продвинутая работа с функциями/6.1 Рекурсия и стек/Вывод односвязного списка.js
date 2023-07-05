/* Напишите функцию printList(list), которая выводит элементы списка по одному.
Сделайте два варианта решения: используя цикл и через рекурсию. */

// используя цикл
function printList(list) {
  while (list) {
    alert(list.value);
    list = list.next;
  }
}

//используя рекурсию

function printListRecursion(list) {
  alert(list.value);

  if (list.next) {
    printListRecursion(list.next);
  }
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
