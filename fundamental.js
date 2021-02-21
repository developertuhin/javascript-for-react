/*
1. Variable
2. Array
3. Condition
4. Loop
5. Function(Regular, Arrow)
*/

// Variable
let money = 20;
money= 15;
money = 10;
console.log(money);

const name = 'Sumon';
const person = {
    name:'Arafat',
    age: 24,
    city: "Barishal"
}
const personInfo = `His name is ${name} and his Age is ${person.age}`;
const personInfo2 = `His city is ${person.city}`;
console.log(personInfo);
console.log(personInfo ,personInfo2);

//-------------ARRAY--------------
let number = [25,43,22,54]; //Number type array
let friends = ['Arafat', 'Riaj','Sumon','Joy', 'Bayzid',]; // String type array
console.log('Friends List:',friends,' And their id :',number);

// Object type Array-
let products = [
    {name:'Laptop',price:50000},
    {name:'Mobile',price:20000},
    {name:'Watch',price:5000}
]
console.log('Products List & Price:',products);

//--------------- Condition ----------
let age = 20;
let look = "smart";
let property = "Rich";

if (age>18 && age<30 && look=="smart" && property !="Poor") {
    console.log("Hey Congratulation ! You are perfect for my Girls whose name is Sunny L");
} else {
    console.log("Hurrrr ! You are not perfect yet. At first see your status and upgrade that then come .");
}

// ---------------- Loop-------------
let gfList = ['Rimi', 'Rafa', 'Tanjila','Sujana','Nishita'];
for (let i = 0; i < gfList.length; i++) {
    const element = gfList[i];
    console.log('# ',element);
}

// ------------Function--------------

//Regular Function -
function add (num1 , num2){
    let sum = num1 + num2;
    return sum * 2;
}
let result = add(10,20);
console.log('Result of Two number using Regular Function : ',result);

// Arrow Function -
// multiple parameter
let doMath = (x,y) => x+y;
let result2 = doMath(50,100);
console.log("Using Arrow Function :",result2);

//single parameter
let singleValue = num => num*100;
let findValue = singleValue(10);
console.log(findValue);

// multiple code in {}
let doMultiple = (a,b)=> {
    let sub = a - b;
    return sub * 5;
}
let result3 = doMultiple(20,10);
console.log(result3);