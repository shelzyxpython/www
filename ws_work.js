// let num = 10;
//
// if (num == 10) {
//     alert('Число: ' + num + ' равно 10')
// } else {
//     alert('Число: ' + num + ' не равно 10')
// }


// let min = 10;
// if (min >= 0 && min <= 14) {
//     alert('1');
// }
// if (min >= 15 && min <= 30) {
//     alert('2');
// }
// if (min >= 31 && min <= 45) {
//     alert('3');
// }
// if (min >= 46 && min <= 59) {
//     alert('4');
// }

// let lang = 'ru';
// let arr;
// if (lang === 'ru') {
//     arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// } else if (lang === 'en') {
//     arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// }

// let lang = 'ru';
// let arr;
// switch (lang) {
//     case 'ru':
//         arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
//         break;
//     case 'en':
//         arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//         break;
// }

// let lang = 'ru';
//
// let daysOfWeek = {
//   ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//   en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// };
//
// let arr = daysOfWeek[lang];


// let a = -1;
// if (a == 0){
//     alert('Верно');
// } else{
//     alert('Неверно');
// }


// let a = -1;
// if (a > 0){
//     alert('Верно');
// } else{
//     alert('Неверно');
// }


// let a = -1;
// if (a < 0){
//     alert('Верно');
// } else{
//     alert('Неверно');
// }


// let a = 1;
// if (a >= 0){
//     alert('Верно');
// } else{
//     alert('Неверно');
// }


// let a = -1;
// if (a <= 0){
//     alert('Верно');
// } else{
//     alert('Неверно');
// }


// let a = 423;
// if (a !== 0) {
//     alert('Верно');
// } else {
//     alert('Неверно');
// }


// let a = 'тест';
// if (a == 'test') {
//     alert('Верно');
// } else {
//     alert('Неверно');
// }


// let a = 3;
// if (a === '1'){
//     alert('Верно');
// } else{
//     alert('Неверно');
// }


// let a = 2;
// if (a > 0 && a < 5) {
//     alert('Верно');
// } else {
//     alert('Неверно');
// }


// let a = 4;
// if (a == 0 || a == 2) {
//     alert(a += 7);
// } else {
//     alert(a /= 10);
// }


// let a = -1;
// let b = 53;
// if (a <= 1 && b >= 3){
//     alert(a + b);
// } else{
//     alert(a - b);
// }


// let a = 2;
// let b = 13;
// if (a > 2 && a < 11 || b >= 6 && b < 14){
//     alert('Верно');
// } else{
//     alert('Неверно');
// }


// let num = 5;
// switch (num) {
//     case 1:
//         result = 'Зима';
//         break;
//     case 2:
//         result = 'Весна';
//         break;
//     case 3:
//         result = 'Лето';
//         break;
//     case 4:
//         result = 'Осень';
//         break;
//     default:
//         result = 'Сезонов только 4';
//         break;
// }
// alert(result);


// let day = 11;
// if (day >= 1 && day <= 10) {
//     alert('1');
// } else if (day > 10 && day <= 20) {
//     alert('2');
// } else if (day > 20 && day <= 31) {
//     alert('3');
// } else {
//     alert('в месяце только 3');
// }


// let month = 9;
// if (month >= 3 && month <= 5) {
//     alert('Весна');
// } else if (month >= 6 && month <= 8) {
//     alert('Лето');
// } else if (month >= 9 && month <= 11) {
//     alert('Осень');
// } else if (month == 12 || month == 1 || month == 2) {
//     alert('Зима');
// } else {
//     alert('В году только 12 месяцев');
// }


// let str = 'crweqwer';
// if (str.charAt(0) === 'a') {
//     alert('да');
// } else {
//     alert('нет');
// }


// let num = '42234';
// if (num.charAt(0) === '1') {
//     alert('да');
// } else {
//     alert('нет');
// }


// let nums = '442';
// let sum = parseInt(nums.charAt(0)) + parseInt(nums.charAt(1)) + parseInt(nums.charAt(2));
// alert(sum);


let nums1 = '442910';
let sum1 = parseInt(nums1.charAt(0)) + parseInt(nums1.charAt(1)) + parseInt(nums1.charAt(2));
let sum2 = parseInt(nums1.charAt(3)) + parseInt(nums1.charAt(4)) + parseInt(nums1.charAt(5));

if (sum1 == sum2) {
    alert('да')
} else {
    alert('нет')
}