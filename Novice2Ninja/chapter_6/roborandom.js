//updating the Random Number on the top
const title = document.querySelector('h1');
console.log(title.innerText);
let robolink = document.querySelector('img');

//onsole.log(robolink.src);

rlink = robolink.src;

//querying updating the robolink
//random generator
const showBot=(()=>{

let random = Math.random();

random = (Math.round(random * 100));
console.log(random);
//console.log(Math.round(random * 100));

rlink = robolink.src + random;
html = '';
console.log(rlink);
title.innerText = random;

robolink.src = rlink;

});

setInterval(showBot,2000);