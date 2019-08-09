//adding the ordered list to the html

const ul = document.querySelector('.people');

//document.querySelector().style.backgroundColor = "red";
document.querySelector('h1').innerHTML = "Hello World!";

const people = ['Papa','Amitabh','Geetanjali','Mihir','Megha','Mummy'];

people.sort();

let html = ``;

//for each

people.forEach((person)=>{
    html += `<li>${person}</li>`;
});
console.log(`hey what is this ${ul}`);
console.log(html);
ul.innerHTML = html;