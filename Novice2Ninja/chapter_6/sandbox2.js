// querying the anchor tag

const link = document.querySelector('a');

console.log(link.getAttribute('href'));

//chaging the attribute and text

link.setAttribute('href','https://thenetninja.co.uk');
link.innerText = 'the Net Ninja Website';

//changing the attribute say from error to success

const mssg = document.querySelector('p');

console.log(mssg.classList);

mssg.classList.add("success");

//console.log (mssg.getAttribute('class'));

//changing this to success

//mssg.setAttribute('class','success');
//mssg.setAttribute('style','color:green');

//using the style attrbute using dot operator

const title1 = document.querySelector('h1');

console.log(title1.style);
title1.style.color = 'red';