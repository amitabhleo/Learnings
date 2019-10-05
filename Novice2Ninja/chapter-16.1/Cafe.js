const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector("#add-cafe-form");

//creating a function to render cafe
function renderCafe(doc){
    //creating elements to li
    let li = document.createElement("li");
    let name = document.createElement("span");
    let city = document.createElement("span");
    let item = document.createElement("span");
    let image = document.createElement("img");
    let btn = document.createElement("BUTTON")
    //adding elements to li
    li.setAttribute("data-id",doc.id);
    name.textContent = doc.data().name;
    item.textContent = doc.data().item;
    city.textContent = doc.data().city;
    image.src = doc.data().photo;
    btn.innerHTML = `<input type="file" name="fileButton" id="fileButton" accept="image/*" ></input>`;

    li.appendChild(name);
    li.appendChild(item);
    li.appendChild(city);
    li.appendChild(image);

    cafeList.appendChild(li);
}
//querying Firebase and getting the data
db.collection('vendors').orderBy('city')
.get().then(snapshot => {
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
    const addCafe = (url =>{
            console.log("photo link is : ",url);
            db.collection("vendors").add({
            name: form.name.value,
            city: form.city.value,
            photo: url
            
            });
            form.name.value = "";
            form.city.value = "";

        });
 
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
          addCafe(downloadURL);
          
        });
      })
      .catch(err => {
        console.log(err);
      });
  });