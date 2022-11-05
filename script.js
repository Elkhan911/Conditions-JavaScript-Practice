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
