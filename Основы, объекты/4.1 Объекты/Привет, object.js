/*Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта. 
 */

const user = {};
user.name = "Jhon";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);
