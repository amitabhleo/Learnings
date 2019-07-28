//adding the ordered list to the html

const ul = document.querySelector('.people');

const people = ['Amitabh','Geetanjali','Mihir','Megha'];

let html = ``;

//for each

people.forEach((person)=>{
    html += `<li>${person}</li>`;
});

console.log(html);
ul.innerHTML = html;