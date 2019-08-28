//this get method returns a promse
const list = document.querySelector("ul");
const form = document.querySelector("form");

const addRecipe = (recipe,id)=> {
  const time = recipe.created_at.toDate();
  let html = `
        <li data-id = "${id}"> 
        <div style="color: brown">${recipe.title}</div>
        <div>${time}</div>
        <button class = "btn btn-danger">Delete</button>
        </li>
        `;
  //console.log(html);
  list.innerHTML += html;
};

//get documents
db.collection("recipes")
  .get()
  .then(snapshot => {
    //console.log(snapshot.docs[0].data());
    snapshot.docs.forEach(doc => {
      //console.log(doc.data());
      //console.log(doc.id);
      addRecipe(doc.data(),doc.id);
    });
  })
  .catch(err => {
    console.log(err);
  });

//add documents
form.addEventListener("submit", e => {
  e.preventDefault();

  const now = new Date();
  //creating a js object similar to the firebae
  const recipe = {
    title: form.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now)
  };
  //this also passes a promise which can be resolved or rejected
  console.log("value added", form.recipe.value);
  db.collection("recipes")
    .add(recipe)
    .then(() => {
      console.log("document added");
    })
    .catch(err => {
      console.log(err);
    });
});
//delete document
//we will be adding an event lister to the Ul an not to the li

list.addEventListener("click", e => {
  //console.log(e);
  if (e.target.tagName === 'BUTTON'){
      const id = e.target.parentElement.getAttribute('data-id');
      db.collection('recipes').doc(id).delete().then(()=>{
          console.log('recipe deleted');
      }).catch(err=>{
          console.log(err);
      })
    }
});
