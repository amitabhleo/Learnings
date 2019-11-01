const itemsList = document.querySelector("#items-list");
const form1 = document.querySelector("#add-items-form");
const header = document.querySelector("h2");

//TODO:updating cafe header
header.innerHTML = `<h2>Cafe Name Here</h2>`;

//creating a function to render cafe items
function renderItems(doc) {
  //creating elements to li
  let li = document.createElement("li");
  let name = document.createElement("span");
  let product = document.createElement("span");
  let item = document.createElement("span");
  let image = document.createElement("img");
  //let btn = document.createElement("BUTTON")
  //adding elements to li
  li.setAttribute("data-id", doc.id);
  image.src = doc.data().item_photo;
  name.textContent = doc.data().name;
  item.textContent = doc.data().item;
  //TODO:adding the product from URl
  product.textContent = prdName(doc.data().products.path);
    console.log('something here:',prdName(doc.data().products.path));
  li.appendChild(image);
  li.appendChild(name);
  li.appendChild(item);
  li.appendChild(product);
  
  itemsList.appendChild(li);
  //itemsList.appendChild(li);
}
//old querying Firebase and getting the data
// db.collection('vendors').orderBy('city')
// .get().then(snapshot => {
//     snapshot.docs.forEach(doc => {
//         renderCafe(doc);
//     });
// });
//another way to query sub-collection this seems a better way -working code
db.collection("/vendors/qXrUwwcJGwEX7ngqfvBx/items")
// db.collection("vendors")
//   .doc("qXrUwwcJGwEX7ngqfvBx")
//   .collection("items")
  //.where("name","==","pav bhaji")
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(docu => {
      //console.log(docu.data().products.path);
      // var newurl = (docu.data().products.path);
      // let prodname = prdName(newurl);
      // console.log('prodname here:',prodname);
       //console.log(docu.id);
      renderItems(docu);
    });
  });
//TODO: fetching the products collection
//db.doc("products/FKJCWPS2D9nyhHxaEYi7/Product Family/1KnVRgG8r9jzYE3yjLp8")
//db.doc("/products/FKJCWPS2D9nyhHxaEYi7/Product Family/4xPn7YqHQuuQRwGXOXxL")
  // .get()
  // .then(snap => { 
  //     console.log("product Name:", snap.data().name);
  // });
const prdName = prdUrl =>{
    db.doc(prdUrl)
    .get()
    .then(snap => {
      var pname = snap.data().name;
    console.log("product Name:", pname);//snap.data().name);
    return pname;
  });

};

//vendors/GegiiT80tJ8dWoXCHXBK/items/Nw2Idi4Ry9uKyG4VQrYk
var prodRefAloo = db
  .collection("vendors")
  .doc("qXrUwwcJGwEX7ngqfvBx")
  .collection("items")
  //.doc("BNbENCc1TPrLy77pGx0q")
  //.collection("product")
  //.doc("aloo")
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(doc => {
      console.log(`${doc.id} => ${doc.data().type}`);
      console.log(`${doc.id} => ${doc.data()}`);
    });
  });

//TODO:CollectionGroup query testing uploading in an object
class Products{
  //in javascript have to define a constructor
  constructor(docId,name){
    this.docId = docId;
    this.name = name;
  }
}
prdArray = [];
db.collectionGroup("items")
//.orderBy("prod-ref", "asc")
.get()
.then(snapshot => {
  snapshot.docs.forEach(docu => {
    //console.log(typeof docu);
    prd = new Products(docu.id,docu.data().name);
    prdArray.push({
      docId:docu.id,
      name:docu.data().name
    });
    //console.log('PrdArray inside :',prdArray);
    //renderItems(docu);
  });
  console.log('prdNew outside :',prdArray);
});
// saving data

//Old codeadding new restaurant to firebase
// form1.addEventListener("submit", e => {
//     e.preventDefault();
//     db.collection("vendors").add({
//     name: form1.name.value,
//     city: form1.city.value

//     });
//     form1.name.value = "";
//     form1.city.value = "";
// });

//TODO:adding a new restaurant from a function after the image is uploaded
const addItem = url => {
  console.log("photo link is : ", url);
  db.collection("vendors")
    .doc("qXrUwwcJGwEX7ngqfvBx")
    .collection("items")
    .add({
      name: form1.name.value,
      item: form1.city.value,
      item_photo: url
    });
  form1.name.value = "";
  form1.city.value = "";
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
        addItem(resizeUrl);
      });
    })
    .catch(err => {
      console.log(err);
    });
});
