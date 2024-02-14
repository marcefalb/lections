// let student = new Object(); // конструктор объекта
// let student = {};  // литерал объекта или литеральная нотация

// let student = {
//   name: "Семён",
//   age: 21,
//   "student level": "junior",
//   course: "JavaScript разработчик",
// };

// console.log(student);
// console.log(student.name);
// console.log(student["student level"]);

// let studentLevel = "student level"
//
// let student = {
//   name: "Семён",
//   age: 21,
//   "student level": "junior",
//   course: "JavaScript разработчик",
// };
//
// console.log(student[studentLevel]);

// let student = {
//   name: "Семён",
// };
//
// student.age = 21;
// student["student level"] = "junior";
// student.course = "JavaScript разработчик";
//
// console.log(student);

// delete student["student level"];
// delete student.age;

// const student = {
//   name: "Семён",
//   age: 21,
//   "student level": "junior",
//   course: "JavaScript разработчик",
// };
//
// student.age = 29;
// student["student level"] = "middle";

// let student = {
//   name: "Семён",
//   age: 21,
//   skills: {
//     html: true,
//     css: true,
//     react: false,
//   },
// };
//
// console.log(student.skills.html);

// let student = {
//   name: "Семён",
//   age: 21,
//   "student level": "junior",
//   course: "JavaScript разработчик",
// };
//
// if (student["work experience"] === undefined || "work experience" in student === false) {
//   console.log ('Студент не имеет опыта работы!');
// };

// for (let key in object) {
//   console.log(key);
//   console.log(object[key]);
// }


// let skills = {
//   "30": "React",
//   "1": "HTML",
//   "3": "CSS",
//   "10": "JavaScript",
// };
//
// for (key in skills) {
//   console.log(key + ": " + skills[key]);
// }

// let skills = {
//   "4": "React",
//   "1": "HTML",
//   "2": "CSS",
//   "3": "JavaScript",
// };
//
// let skillList = skills;
// skillList["5"] = "NodeJS";
// console.log(skills);
// console.log(skillList);

// let skills = {
//   "4": "React",
//   "1": "HTML",
//   "2": "CSS",
//   "3": "JavaScript",
//   "5": "NodeJS",
// };
//
// let mySkills = Object.assign({}, skills);
// delete mySkills["2"];
// console.log(skills);
// console.log(mySkills);

// let skills = {
//   "1": "HTML",
//   "2": "CSS",
//   "3": "JavaScript",
// };
//
// let mySkills = {};
//
// for (let key in skills) {
//   mySkills[key] = skills[key];
// }
//
// delete mySkills["3"];
// console.log(mySkills);
// console.log(skills);