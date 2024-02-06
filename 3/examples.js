function showIntention() {
  console.log('Я хочу стать программистом!');
}

showIntention();

// function showStudentIntention(studentName, profession) {
//   console.log(studentName + " хочет освоить профессию " + profession);
// }
//
// showStudentIntention("Лера", "React-разработчик");
// showStudentIntention("Константин", "Web-разработчик");

// function showStudentIntention() {
//   let studentName = "Константин";
//   let profession = "Web-разработчик";
//
//   console.log(studentName + " хочет освоить профессию " + profession);
// }
//
// showStudentIntention()
// console.log(studentName + " считает профессию " + profession + " бесперспективной");

// function showStudentIntention(studentName, profession = "программист") {
//   console.log(studentName + " хочет освоить профессию " + profession);
// }
//
// showStudentIntention("Лера"); //Лера хочет освоить профессию программист

// function calcScores(scoresFirstExam, scoresSecondExam, scoresThirdExam) {
//   let examResults = "Результат за три экзамена " + (scoresFirstExam + scoresSecondExam + scoresThirdExam);
//   return examResults;
// }
//
// console.log(calcScores(50, 50, 80));

// function calcScores(scoresFirstExam, scoresSecondExam, scoresThirdExam) {
//   let examResults = scoresFirstExam + scoresSecondExam + scoresThirdExam;
//   if (examResults >= 185) {
//     return "Вы поступили!";
//   } else {
//     return "Вы не поступили!";
//   }
// }
//
// console.log(calcScores(50, 50, 100)); // Вы поступили!
// console.log(calcScores(50, 50, 50)); // Вы не поступили!

// return a + b + c; // верно
//
// return (
//     a + b + c     // верно
// )
//
// return // интерпретатор автоматически поставит ; после return
// a + b + c // функция не вернет значение