//using get document by id

const title = document.getElementById('page-title');

console.log(title);

//updating the DOM

const para3 = document.querySelector('p');

//console.log(para3.innerText);

//para3.innerText = ' Ninjas are Awesome';

const para4 = document.querySelectorAll('p');

para4.forEach(para =>{
    para.innerText += ' new text';
});

const content = document.querySelector('.content');

//console.log(content.innerHTML);
//content.innerHTML = '<h2>THIS IS THE NEW H2 </h2>';

//adding a array to a a content

people = ['amitabh','geetanjali','mihir','megha'];

people.forEach(person =>{
    content.innerHTML += `<p> ${person}</p>`;
});