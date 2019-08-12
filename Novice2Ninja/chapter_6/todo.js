const ul = document.querySelector('ul');

//console.log (ul);
const button = document.querySelector("button");

button.addEventListener("click", () => {
  //console.log("you clicked me");
  //ul.innerHTML += '<li> anything new here</li>';
  //another way to create an htmlelement
  const li = document.createElement('li');
  li.textContent = 'something new here';
  ul.prepend(li);

});

//adding an event lister to all the li tags

//const items = document.querySelectorAll("li");
//using for each and adding event listner to each item
// items.forEach(item => {
//   item.addEventListener("click", e => {
//     // console.log('item clicked');
//     //console.log(e.target);
//     //also returns the same value
//     //console.log(item);
//     //e.target.style.textDecoration = "line-through";
//     //e.target.remove();
//   });
// });
//event bubling we will put the event lister on the UL and not LI

ul.addEventListener('click',e =>{
    console.log('callback from UL');
    //console.log(e.target);
    //using e.target.tagName to enure gets LI click event
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});