//updating the Random Number on the top
const title = document.querySelector('h1');
console.log(title.innerText);
let robolink = document.querySelector('img');

console.log(robolink.src);

rlink = robolink.src;

//querying updating the robolink
//random generator
let random = Math.random();
random = (Math.round(random * 100));
console.log(random);
//console.log(Math.round(random * 100));
rlink = robolink.src + random;
html = '';
console.log(rlink);
title.innerText += random;

robolink.src = rlink;

console.log(robolink.src);