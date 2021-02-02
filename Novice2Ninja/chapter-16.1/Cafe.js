const cafeList = document.querySelector("#cafe-list");
const form = document.querySelector("#add-cafe-form");
const cafeName = document.querySelector(".cafeId");


// TODO:locate your element and add the Click Event Listener
document.getElementById("cafe-list").addEventListener("click", function(e) {
  // e.target is our targetted element.
  // try doing console.log(e.target.nodeName), it will result LI
  if (e.target && e.target.nodeName == "LI") {
    console.log(e.target.id + " was clicked");
    console.log(e.target.getAttribute("data-id") + " value of data-id");
    const dataid = e.target.getAttribute("data-id");
    cafeName.innerHTML = `<h2>${dataid}</h2>`;
    window.open("http://127.0.0.1:5500/Learnings/Novice2Ninja/chapter-16.1/Items.html");
  // Storing the data:
  localStorage.setItem("variableName",dataid);
  }

});
//creating a function to render cafe
function renderCafe(doc) {
  //creating elements to li
  let li = document.createElement("li");
  let name = document.createElement("span");
  let city = document.createElement("span");
  let item = document.createElement("span");
  let image = document.createElement("img");
  let btn = document.createElement("BUTTON");
  //adding elements to li
  li.setAttribute("data-id", doc.id);
  image.src = doc.data().photo;
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;
  item.textContent = doc.data().item;
    btn.innerHTML = `<input type="file" name="fileButton" id="fileButton" accept="image/*" ></input>`;

  li.appendChild(image);
  li.appendChild(name);
  li.appendChild(city);
  li.appendChild(item);


  cafeList.appendChild(li);
}
//querying Firebase and getting the data
db.collection("products")
  .orderBy("name")
  //TODO:realtime listner instead of .get.then use onSnapshot
  .onSnapshot(snapshot => {
  //.get().then(snapshot => {
    snapshot.docs.forEach(doc => {
      renderCafe(doc);
    });
  });

//Old codeadding new restaurant to firebase
// form.addEventListener("submit", e => {
//     e.preventDefault();
//     db.collection("vendors").add({
//     name: form.name.value,
//     city: form.city.value

//     });
//     form.name.value = "";
//     form.city.value = "";
// });
//TODO:adding a new restaurant from a function after the image is uploaded
const addCafe = url => {
  console.log("photo link is : ", url);
  db.collection("products").add({
    name: form.name.value,
    city: form.city.value,
    photo: url
  });
  form.name.value = "";
  form.city.value = "";
};

//TODO:trying with uploding the image to firestore and passing the value to fireStore
//uploading a file in firebase storage
//later pass the refence in firebase database we will be using firebase doc.id

fileButton.addEventListener("change", e => {
  let file = e.target.files[0];
  console.log(e.target.files[0]);

  // Points to the images root reference
  var storageRef = firebase.storage().ref("cafes/" + file.name);
  //let task = storageRef.put(file);
  storageRef
    .put(file)
    .then(snapshot => {
      snapshot.ref.getDownloadURL().then(downloadURL => {
        console.log("File available at", downloadURL);
        var url = "google.com";
        var resizeUrl = downloadURL.replace(".jpg", "_100x100.jpg");
        console.log(resizeUrl);
        addCafe(resizeUrl);
      });
    })
    .catch(err => {
      console.log(err);
    });
});
//TODO:checking join in firebase
db.collection("events")
  .where("name", "==", "Annual Meet")
  .get()
  .then(val => {
    val.forEach(doc => {
      const eventKey = doc.id;
      console.log("eventKey :", doc.id);
    });
  });

