let count = 10;
let price = 10.99;
Infinity, -Infinity, NaN // (Not a Number)

let infinity = 1 / 0; // Бесконечность
let notANumber = "abc" / 3; // NaN

let single = 'строка';
let double = "строка";
let backticks = `строка`;

let name = "Михаил";
let greeting = `Привет, ${name}!`;

let isGreater = 4 > 1; // true

console.log(true && true);   // true
console.log(false && true);  // false
console.log(true && false);  // false
console.log(false && false); // false

console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false

console.log( !true ); // false
console.log( !false ); // true
console.log( !'текст' ); // false
console.log( !5 ); // false
console.log( !0 ); // true

let age = null; // переменная age пуста
let x; // переменная x не определена

const bigInt = 1234567890123456789012345678901234567890n;

console.log(typeof 10); // "number"
console.log(typeof "строка"); // "string"
console.log(typeof true); // "boolean"

let value = "5";
console.log(Number(value)); // преобразует строку в число

console.log("5" / "2"); // неявное преобразование строк в числа, вывод: 2.5