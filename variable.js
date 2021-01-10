// 1. Use strict
// added in ES5
// user this for Valina Javascript.
'use strict';

// 2. Variable, rw(read, write)
// let (added in ES6)
let globalName = 'global name';
{
  let name = 'banny';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
// console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// *hoisting이란? 어디에 선언했느냐에 상관없이 선언을 제일 위로 끌어올려주는 것 (hoisting:끌어올려주는 것)
// has no block scope
age = 4;
var age;
console.log(`age: ${age}`);

// 3. Constant, r(read only)
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data type: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
// mytable type : let
// immutable type : const

// 4. Variable types
// private, single item: number, string, boolean, null, undefined, sybol
// object, box container
// function, first-class function

const count = 17; // Integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt
const bigInt = 12345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ', type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// ture : any other value
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
// console.log(`value: ${symbol1}, type: ${typeof symbol1}`);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const banny = { name: 'banny', age: 28 };
banny.age = 29;

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); // 에러
