// //passing arguments to the function setting defaults
// const speak = function (name = 'Amitabh', time = 'day') {
//      //using a template string
//    console.log(`Good ${time} ${name}`)
// };
// speak();

//passing functions to a 

const calcArea = function(radius){
    //let area = 3.14 * radius**2;
    return 3.14 * radius**2;//no need for a local variable
    //putting this outside
    //console.log(3.14 * radius**2);
};
const area = calcArea(5);
console.log(area);
//putting all in one
console.log(calcArea(6));

//arrow function just testing working fine will visit later
const calcArea1 =radius =>3.14 * radius**2;

console.log(calcArea1(7));

//greeting basic arrow function

const greet =(a) => `Hey ${a}, here I come`;

console.log(greet("amitabh"));

//more complex arrow
// const bill = function(products,rate){
//     let total = 0;
//     for(let i=0; i < products.length; i++){
//         total += products[i] + products[i] *rate;      
//     }
//     return total;
// }
// let total = bill([10],.2);
// console.log('total :'+total);
// console.log(bill([10,20],.2));
//now the arrow function

const bill = (products,rate) => {
    let total = 0;
    for(let i=0; i < products.length; i++){
        total += products[i] + products[i] *rate;      
    }
    return total;
}
let total = bill([10,20,30],.2);
console.log('total :'+total);
console.log(bill([10,20],.2));

//callback function

const myFunc = (callBackFunc) => {
    let value = 10;
    //invoking the callback
    callBackFunc(value);
};

// //const callBackFunction = function(val){
//     console.log(val);
// }
myFunc(function(val){
    //do something
    console.log(val);
});