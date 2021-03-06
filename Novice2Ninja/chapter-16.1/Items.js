const itemsList = document.querySelector("#items-list");
const form1 = document.querySelector("#add-items-form");
const itemName = document.querySelector("h5");
const vendorName = document.querySelector("h6");
const cafeName = document.querySelector(".cafeId");


// TODO:locate your element and add the Click Event Listener
document.getElementById("items-list").addEventListener("click", function(e) {
  // e.target is our targetted element.
  // try doing console.log(e.target.nodeName), it will result LI
  if (e.target && e.target.nodeName == "LI") {
    console.log(e.target.id + " was clicked");
    //console.log(e.target.parent.parent + " parent id");
    console.log(e.target.getAttribute("vendor-id") + " value of vendor-id");
    const vendor_id = e.target.getAttribute("vendor-id");
    vendorName.innerHTML = `<h5>${vendor_id}</h5>`;
    window.open("http://127.0.0.1:5500/Learnings/Novice2Ninja/chapter-16.1/myItems.html");
    // Storing the data:
  localStorage.setItem("vendorId",vendor_id);
  }
});

//TODO:CollectionGroup query testing uploading in an object pulling this in begining
class Products {
  //in javascript have to define a constructor
  constructor(docId, name, path,prodid) {
    this.docId = docId;
    this.name = name;
    this.path = path;
    this.prodid = prodid;
  }
}
const ProductFamilyArray = [];
db.collectionGroup("Product Family")
  // db.collection("products")
  // .where("name", "==", "grocery")
  //db.collection("/vendors/qXrUwwcJGwEX7ngqfvBx/items")//for testing
  //.orderBy("prod-ref", "asc")
  //TODO:realtime listner instead of .get.then use onSnapshot
  //.get().then(snapshot => {
    .onSnapshot(snapshot => {
    console.log("product group ", snapshot.docs[0].ref.parent.parent.id);
    snapshot.docs.forEach(docu => {
      prd = new Products(
        docu.id,
        docu.data().name,
        docu.ref.path,
        docu.ref.parent.parent.id 
      );
      ProductFamilyArray.push({
        docId: docu.id,
        name: docu.data().name,
        path: docu.ref.path,
        prodId: docu.ref.parent.parent.id
      });
    });
    console.log("prd family :", ProductFamilyArray);
  });
//TODO:accessing product path from name

const getProd = prd => {
  var varPath;
  var vobj;
  ProductFamilyArray.forEach(ele => {
    if (ele.name === prd) {
      console.log(ele.path);
      varPath = ele.path;
      vobj = ele;
    }
  });
  //return varPath;
  return vobj;
};

//TODO:Receiving the data and fetching the product family from the prodid
var ls = localStorage.getItem("variableName");
console.log("value of id", ls);

//TODO:updating cafe header
itemName.innerHTML = `<h2>${ls}</h2>`;

//TODO: creating a function to render cafe items
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
  li.setAttribute("vendor-id",doc.ref.parent.parent.id);
  image.src = doc.data().item_photo;
  name.textContent = doc.data().name;
  item.textContent = doc.data().item;
  product.textContent = doc.data().product;

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
//db.collection("/vendors/qXrUwwcJGwEX7ngqfvBx/items")
//.where("name","==","Biryani")
db.collectionGroup("items")
  .orderBy("products", "asc")
  .where("prodMasId", "==", ls)
  //.where("vendorRef","==","vendors/J4iUI2KPDNDAHp4yGsUd")
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(docu => {
      //fetching the value of the vendor id
      console.log('item-parent:',docu.ref.parent.parent.id);
      
      renderItems(docu);
    });
  });
//TODO:adding a new restaurant from a function after the image is uploaded
//hard coding for a new product lets say momos
const addItem = url => {
  console.log("photo link is : ", url);
  prdName = form1.product.value;
  var prd = getProd(prdName).path;
  var prId = getProd(prdName).prodId;
  //console.log('burger-path:',prd);
  db.collection("vendors")
    .doc("94hgK4DfbSye4tO3rbCn")//("J4iUI2KPDNDAHp4yGsUd")
    //("qXrUwwcJGwEX7ngqfvBx") //("3oGYeJUBvDsJorMiEeGZ")
    .collection("items")
    .add({
      name: form1.name.value,
      item: form1.city.value,
      item_photo: url,
      product: prdName,
      products: db.doc(prd),
      prodMasId: prId,
      vendorRef: db.doc("vendors/J4iUI2KPDNDAHp4yGsUd")
      //products: db.doc("products/6mVfopcUh3tkIBwB4VCS/Product Family/8PxkDH07SNUlg6MbpSrU")
    });

  form1.name.value = "";
  form1.city.value = "";
  form1.product.value = "";
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
