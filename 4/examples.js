// if (условие) {
//   инструкция
// }

// if (условие) однострочная инструкция

// if (условие) {
//   инструкция №1
// } else {
//   инструкция №2
// }

// let scores = 75
//
// if (scores > 90) {
//   alert('Ваша оценка 5');
//   alert('Поздравляем! Вы поступите на бюджет.');
// } else if (scores <= 90 && scores > 60) {
//   alert('Вы получили 4');
//   alert('Вы можете претендовать только на платное обучение.');
// } else if (scores <= 60 && scores > 30) {
//   alert('Вы получили 3');
//   alert('Ваши шансы на поступление низки');
// } else {
//   alert('Вы получили 2');
//   alert('Вы не поступили в университет');
// }

// ------------------------------------------------------------------------------------

// let result = условие ? значение1 : значение2;

// let age = prompt('Возраст?', 18);
//
// let message = (age < 3) ? 'Здравствуй, малыш!' :
//     (age < 18) ? 'Привет!' :
//         (age < 100) ? 'Здравствуйте!' :
//             'Какой необычный возраст!';

// let company = "SomeCompany";
//
// (company == 'Netscape') ?
//     alert('Первый вариант!') : alert('Второй вариант.');

// if (company == 'Netscape') {
//   alert('Первый вариант!');
// } else {
//   alert('Второй вариант.');
// }

// -------------------------------------------------------------------------------------

// let varName = function(param1, param2, param3) {
//   console.log('Быть JavaScript разработчиком это интересно!');
// };

// function funcName(param1, param2, param3) {
//   console.log('Быть JavaScript разработчиком это интересно!');
// }

// let a = 9;
// let showYearCreationJS; // определяем переменную
//
// if (a === 9) {
//   showYearCreationJS = function() {   // записываем функцию в переменную
//     return 'JavaScript был разработан в 1995 году';
//   };
// } else {
//   function showWhoOwnsJS() {
//     return 'JavaScript не является собственностью какой-либо компании или организации';
//   }
// }
//
// console.log(showYearCreationJS()); // вызов пройдет успешно
// console.log(showWhoOwnsJS());      // ошибка - область видимости showWhoOwnsJS ограничивается else

// -------------------------------------------------------------------------------------

// const nameFunc = (param1, param2, param3) => expression;
//
// const countTheBooksOnTheShelves = (shelf1, shelf2, shelf3) => shelf1 + shelf2 + shelf3;
// console.log('На полках ' + countTheBooksOnTheShelves(10, 20, 30) + ' книг');

// или

// function countTheBooksOnTheShelves(shelf1, shelf2, shelf3) {
//   return shelf1 + shelf2 + shelf3;
// }
//
// console.log('На полках ' + countTheBooksOnTheShelves(10, 20, 30) + ' книг');

// const howManyBooksToReadInJS = () => 'Нужно прочитать 1 хорошую книгу по JavaScript - главное не теория, а практика!';
// alert(howManyBooksToReadInJS());

// const showFavoriteProgrammingLanguage = langName => alert('Мой любимый язык программирования ' + langName);
// showFavoriteProgrammingLanguage('JavaScript');

// let jsPracticeTime = 5
//
// let showJSLearningIntensity = (jsPracticeTime >= 3) ?
//     () => alert('Вы на правильном пути!') :
//     () => alert("Надо больше уделять времени практике!");
//
// showJSLearningIntensity();

// let showNamesOfTheProfessionJSProgrammer = () => {
//   let name1 = 'Frontend Developer';
//   let name2 = 'WEB-разработчик';
//   let name3 = 'TypeScript Developer';
//
//   return name1 + name2 + name3;
// }
//
// console.log('Ключевые слова для поиска работы JS разработчиком: ' + showNamesOfTheProfessionJSProgrammer())