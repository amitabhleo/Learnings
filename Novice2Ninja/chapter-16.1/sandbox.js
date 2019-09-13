//adding the  names from my profile collection
//real time listers
db.collection("Profiles").onSnapshot(snapshot =>{
    console.log(snapshot.docChanges());
    snapshot.docs.forEach(doc => {
      addName(doc.data().name, doc.id);
    });
});

const list = document.querySelector("ul");
const form = document.querySelector("form");
//<li data-id = "${id}">
const addName = (name, id) => {
  let html = `
<li data-id = "${id}"> 
<div style="color: brown">${name}</div>
<button class = "btn">Delete</button>
</li>
`;
  list.innerHTML += html;
};
//get documents

db.collection("Profiles")
  .get()
  .then(snapshot => {
    //this returns an array
    //console.log(snapshot.docs[0].data());
    snapshot.docs.forEach(doc => {
      addName(doc.data().name, doc.id);
    });
  })
  .catch(err => {
    console.log(err);
  });
//adding a document
form.addEventListener("submit", e => {
  //remove default action
  e.preventDefault();
  console.log(form.name.value);
  //we have to add this as a json object in firebase
  const profile = {
    name: form.name.value
  };
  db.collection("Profiles")
    .add(profile)
    .then(() => {
      console.log("member added");
    })
    .catch(err => {
      console.log(err);
    });
});
//delete document
//we will be adding an event lister to the Ul an not to the li
list.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    //console.log(e);
    const id = e.target.parentElement.getAttribute("data-id");
    db.collection("Profiles")
      .doc(id)
      .delete()
      .then(() => {
        console.log("document deleted");
      })
      .catch(err => {
        console.log(err);
      });
  }
});
