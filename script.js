// Условия в JavaScript

/* 1.  В переменной day лежит какое-то число из интервала от 1 до 31. 
Определите в какую декаду месяца попадает это число 
(в первую, вторую или третью).*/

let day1 = 27;

if (day1 < 10) {
  console.log("pervaya dekada");
} else if (day1 > 10 && day1 < 20) {
  console.log("vtoraya dekada");
} else if (day1 > 20 && day1 < 30) {
  console.log("tretya dekada");
} else {
  console.log("vi vveli nevernoe znachenie");
}

/* 2. Пусть в переменной num хранится число. Если это число попадает 
в диапазон от 10 до 99, то найдите сумму цифр этого числа. 
Если полученная сумма меньше или равна 9, 
то выведите сообщение о том, что сумма цифр однозначна, 
в противном случае выведите сообщение о том, что сумма цифр двухзначна. */

let num2 = 14;

if (num2 >= 10 && num2 <= 99) {
  let sum = Number(String(num2)[0]) + Number(String(num2)[1]);
  if (sum <= 9) {
    console.log("сумма цифр однозначна");
  } else {
    console.log("сумма цифр двухзначна");
  }
} else {
  console.log("Chislo ne popadayet ot 10 do 99");
}

/* 3. Перепишите следующий код через switch-case:
let lang = 'ru';

if (lang == 'ru') {
	console.log('рус');
} else if (lang == 'en') {
	console.log('анг');
} else if (lang == 'de') {
	console.log('нем');
} else {
	console.log('язык не поддерживается');
} */

let lang = "ru";

switch (lang) {
  case "ru":
    console.log("rus");
    break;

  case "en":
    console.log("анг");
    break;

  case "de":
    console.log("нем");
    break;

  default:
    console.log("язык не поддерживается");
}

/* 4. Перепишите следующий код через тернарный оператор:
let num = 1;
let res;

if (num >= 0) {
	res = '1';
} else {
	res = '2';
}

console.log(res); */

let num4 = 1;
let res4 = num4 >= 0 ? "1" : "2";
console.log(res4);

/* 5. Спросите у пользователя, есть ли ему уже 18 лет. 
Если есть - выведите в консоль "есть 18 лет", 
а если нет, выведите сообщение о том, что доступ пользователю запрещен.*/

let question5 = confirm("Вам есть 18 лет?");

if (question5) {
  console.log("Пользователю есть 18 лет");
} else {
  console.log("Вам запрещен доступ");
}

/* 6. let min= 26. Определите в какую треть часа 
попадает указанное количество минут. */

let min6 = 25;

if (min6 > 0 && min6 < 60) {
  if (min6 <= 19) {
    console.log("первая треть");
  } else if (min6 <= 39) {
    console.log("вторая треть");
  } else if (min6 <= 60) {
    console.log("третья треть");
  }
} else {
  console.log("Вы указали значение больше 60 или меньше 0");
}

/* 7. В переменной arr содержится некоторый массив с числами. 
Напишите условие, которое проверит, что в массиве 5 элемента. 
Если это так, выведите на экран сумму элементов массива. */

let arr7 = [1, 2, 3, 4, 5];
let res7 = 0;

if (arr7.length == 5) {
  for (let elem of arr7) {
    res7 += elem;
  }
  console.log(res7);
}

/* 8. Дана переменная, содержащая некоторую строку. 
Проверьте, что эта строка начинается на символ 'a' или символ 'b'.*/

let str8 = "ahfryb";
let res8 = str8[0] == "a" && str8[str8.length - 1] == "b" ? true : false;
console.log(res8);

/* 9. Пусть в переменной num хранится число. Определите, четное число или нет. */

let num9 = 96;
let res9 = num9 % 2 == 0 ? true : false;
console.log(res9);
