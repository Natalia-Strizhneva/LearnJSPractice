/*
1. Создайте массив styles с элементами «Джаз» и «Блюз».
2. Добавьте «Рок-н-ролл» в конец.
3. Замените значение в середине на «Классика».
Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
4. Удалите первый элемент массива и покажите его.
5. Вставьте Рэп и Регги в начало массива.
*/

const styles = ["jass", "blues"];

styles.push("rock-n-roll");

styles[Math.floor((styles.length - 1) / 2)] = "classic";

alert(styles.shift());

styles.unshift("rap", "raggy");

alert(styles); //rap,raggy,classic,rock-n-roll
