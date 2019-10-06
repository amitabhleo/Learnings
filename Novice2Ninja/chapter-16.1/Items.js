const cafeList = document.querySelector('#items-list');
const form = document.querySelector("#add-items-form");
const header = document.querySelector("h2");

//TODO:updating cafe header
//header.innerHTML = `<h2>Cafe Name Here</h2>`;

//creating a function to render cafe
function renderCafe(doc){
    //creating elements to li
    let li = document.createElement("li");
    let name = document.createElement("span");
    //let city = document.createElement("span");
    let item = document.createElement("span");
    let image = document.createElement("img");
    //let btn = document.createElement("BUTTON")
    //adding elements to li
    li.setAttribute("data-id",doc.id);
    name.textContent = doc.data().name;
    item.textContent = doc.data().item;
    // city.textContent = doc.data().city;
    image.src = doc.data().item_photo;
    //btn.innerHTML = `<input type="file" name="fileButton" id="fileButton" accept="image/*" ></input>`;

    li.appendChild(name);
    li.appendChild(item);
    // li.appendChild(city);
    li.appendChild(image);

    cafeList.appendChild(li);
}
//old querying Firebase and getting the data
    // db.collection('vendors').orderBy('city')
    // .get().then(snapshot => {
    //     snapshot.docs.forEach(doc => {
    //         renderCafe(doc);
    //     });
    // });
//another way to query sub-collection this seems a better way -working code
    db.collection('vendors').doc('QNk3fg7fBgiSVjAAc9H4').collection('items')
    .get().then(snapshot => {
       
          snapshot.docs.forEach(doc => {
            //console.log(doc.data().item_photo);
            renderCafe(doc);
        });
    });
// saving data

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
    const addItem = (url =>{
            console.log("photo link is : ",url);
            db.collection("vendors").doc('QNk3fg7fBgiSVjAAc9H4').collection('items')
            .add({
                name: form.name.value,
                item: form.city.value,
                item_photo: url,
                   
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
    var storageRef = firebase.storage().ref("cafes/" + file.name );
    //let task = storageRef.put(file);
    storageRef
      .put(file)
      .then(snapshot => {
        snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log("File available at", downloadURL);
          var url = "google.com";
            var resizeUrl = downloadURL.replace(".jpg","_100x100.jpg");
            console.log(resizeUrl);
            addItem(resizeUrl);
          });
      })
      .catch(err => {
        console.log(err);
      });
  });