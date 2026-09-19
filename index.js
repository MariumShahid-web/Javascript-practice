//var is functional scoped variable, let and const are block scoped variables

//with var we can redeclare and reassign the variable,
// with let we can reassign but not redeclare, 
// and with const we cannot reassign or redeclare the variable.

//redaclaration is possible with var  but ot possible with let and const





//Temporal Dead Zone (TDZ) - utna area jitnay mn js ko pata to ha keh variable exist krta ha pr woh value nhi bataskhta keh uss variable ki kya value ha 
// kyon keh woh baad mn declare huwa hota ha aur js say poocha pehlay jata ha ha tou ussay iss keh baray mn nhi pata ha hota
//forexample:  console.log(a);
// let a=20;
//error: Uncaught ReferenceError: Cannot access 'a' before initialization


//Hoisting Impact Per Type
//hoisting --> ek variable ko jaab js mn banatay hain tou woh 2 hisso mn toot jaata ha and uska declare part oper chala jaata ha
//and uska initialization part neeche reh jaata ha
//var --> hoist --> undefined
//let --> hoist --> TDZ--> X
//const --> hoist --> TDZ--> X

//Data Types in JS   --->Data ki types ko 2 hisso mn divide kiya jaata ha
//Primitive Data Types and Reference Data Types

//Primitives Dtat types --> aisi values jinko copy karnay pr aik real copy mil jaye
//String, Number, Boolean, Null, Undefined, Symbol, BigInt

//Reference Data Types --> inko copy krnay pr real copy nhi milay gi pr reference mil jaye ga
//Object{}, Array[], Function(), Date, RegExp, Error


//Dynamic Typing --> js mn statuc typing nhi ha uski jagah dynamic typing ha jis ka matlab ha aap data ko change krskhtay ho
//  kyonkeh yahan pr dynamic data types hain

//typeof quirks (e.g. typeof null === "object") --> js mn aik bug ha jis ki wajah say null ka type object show hota ha

//Type Coercion (== vs ===)
//truthy vs falsy values

//type coercion --> concept jis mn aik type automatically convert hojae

//all false values --> 0, false, "", undefined, null, NaN, document.all

//typeof NaN === 'number' //true

//operators in JS --> Arithmetic, Assignment, Comparison, Logical, Bitwise, String, Conditional (Ternary), Comma, Unary, Relational
// + - * / % ** ++ -- 
// = == === 
// > < >= <= != !== !!
//&&  || 
// ?: Ternary operator

//true && true --> true
//true && false --> false
//false && true --> false
//false && false --> false
 
// true || true --> true
// true || false --> true
// false || true --> true
// false || false --> false

//unary operators --> operators jo aik hi value ko operate krta ha that are + - ! ~ typeof ++ --

//instanceof always warks with reference data types like functions(), Arrays(), Objects()
//typeof works with mostly with primitives datatypes like string, number, boolean, null, undefined, symbol, bigint

// let points = 60;
// let status = points > 100 ? "gold" : points > 50 ? "silver" : "bronze";
// console.log(status)


//post increment
// let x=3;
// let y=x++;                
// console.log(x,y)

// y = x++   → y gets 3
//             then x becomes 4

//pre increment
// let x=3;
// let y=++x;                
// console.log(x,y)
// y = ++x   → x becomes 4
            // then y gets 4


// let count = 5;
// if(count++ === 5){
//     console.log("matched")
// }else{
//     console.log("unmatched")
// }