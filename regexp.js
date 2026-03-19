//regular expression: here checking if pattern(hello) exist in text
// let text="hello world";
// let pattern=/hello/;

// console.log(pattern.test(text));
// let text="hello world heloo hello hello";
// let pattern=/hello/g;
// console.log(text.match(pattern));

let c=/^\d+$/;
console.log(c.test("123456"));

console.log("123456".match(c));

let email="test@gmail.com";
let regexx=/^[a-zA-Z0-9,_%+-]+@[a-z0-9,-]+\.[a-z]{2,}$/;
