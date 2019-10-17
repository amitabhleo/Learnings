const cafeList = document.querySelector("#cafe-list");
const form = document.querySelector("#add-cafe-form");

// create element & render cafe
function renderCafe(doc) {
  let li = document.createElement("li");
  let name = document.createElement("span");
  let item = document.createElement("span");
  let city = document.createElement("span");
  let cross = document.createElement("div");

  li.setAttribute("data-id", doc.id);
  name.textContent = doc.data().name;
  item.textContent = doc.data().item;
  city.textContent = doc.data().city;
  cross.textContent = "x";

  li.appendChild(name);
  li.appendChild(item);
  li.appendChild(city);
  li.appendChild(cross);

  cafeList.appendChild(li);

  // deleting data
  cross.addEventListener("click", e => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute("data-id");
    db.collection("cafes")
      .doc(id)
      .delete();
  });
}

// getting data
db.collection('cafes')
//.where("recipes", "==", "gFnm6XIXLLeMxr5MCRma")
.orderBy('city')
.get().then(snapshot => {
       snapshot.docs.forEach(doc => {
        console.log(doc.data().recipes.path);
        renderCafe(doc);
    });
});
//trying to query subCollection 
// db.collection('/cafes/2SBrrZ4OME3GkNzGzuUZ/items')
// .get().then(snapshot => {
//        snapshot.docs.forEach(doc => {
//         renderCafe(doc);
//     });
// });
//another way to query sub-collection this seems a better way -working code
    // db.collection('cafes').doc('2SBrrZ4OME3GkNzGzuUZ').collection('items')
    // .get().then(snapshot => {
    //       snapshot.docs.forEach(doc => {
    //         renderCafe(doc);
    //     });
    // });
// saving data
form.addEventListener("submit", e => {
  e.preventDefault();
  db.collection("cafes").add({
    name: form.name.value,
    city: form.city.value
  });
  form.name.value = "";
  form.city.value = "";
});

// real-time listener commenting for now
// db.collection("cafes")
//   .orderBy("city")
//   .onSnapshot(snapshot => {
//     let changes = snapshot.docChanges();
//     changes.forEach(change => {
//       console.log(change.doc.data());
//       if (change.type == "added") {
//         renderCafe(change.doc);
//       } else if (change.type == "removed") {
//         let li = cafeList.querySelector("[data-id=" + change.doc.id + "]");
//         cafeList.removeChild(li);
//       }
//     });
//   });

// updating records (console demo)
// db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').update({
//     name: 'mario world'
// });

// db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').update({
//     city: 'hong kong'
// });

// setting data
// db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').set({
//     city: 'hong kong'
// });
