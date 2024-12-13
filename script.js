'use strict';
//hosting tdz
// variables
// console.log(me);
// console.log(age);
// console.log(isEducated);

// var me = 'nafiisa';
// let age = 18;
// const isEducated = yes;
//functions
// console.log(addDecl(3, 2));
// console.log(addExpr(2,3));
// console.log(addArrow);

// function addDecl(a, b){
//     return a + b;
// }
// const addExpr = function(a ,b ){
//     return a + b;
// }
// const addArrow = (a, b) => a + b;
// console.log(numProducts)
// if(!numProducts) deleteShoppingCart();
// var numProducts = 10;
// function deleteShoppingCart(){
//     console.log('all carts deleted');
// }

// let x = 1;
// const y = 2;
// var z = 3;
// console.log(x === window.x)
// console.log(y === window.y)
// console.log(z === window.z)

//this keyword

const calcAge = function(birthYear){
    console.log(2037 - birthYear);
    console.log(this);
}
calcAge(2006);

//arrow function
const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
}
calcAgeArrow(2006);

const nefisa = {
    Year: 1997,
    calcAge: function(){
        console.log(2037- this.Year);
    }
}
nefisa.calcAge()

const Balqiis = {
    Year: 2013,
};
Balqiis.calcAge = nefisa.calcAge;
Balqiis.calcAge();
const f = nefisa.calcAge;
f();