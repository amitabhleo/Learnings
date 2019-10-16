//querying the dom for a p tag - will query the first p tag

const para = document.querySelector('p');
const para1 = document.querySelector('.error');
const para2 = document.querySelector('body > h1');

console.log(para);
console.log(para1);
console.log(para2);

//query selectorall will return a node list

const paras = document.querySelectorAll('p');

// console.log(paras);
// console.log(paras[2]);

//for each works on a node list

paras.forEach((para,element) => {
    console.log(element,para);
});

const errors = document.querySelectorAll('.error');

errors.forEach(error =>{
    console.log(error);
});