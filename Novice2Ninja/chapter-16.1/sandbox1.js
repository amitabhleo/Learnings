//getting the form data

const form1 = document.querySelector("form");
const h1 = document.querySelector("h1");

//adding the h
const addstatus = sts => {
  let html = `<h3>${sts} </h3>`;
  h1.innerHTML += html;
};
//get documents .get returns a promise
db.collection("hotdog-status")
  .get()
  .then(snapshot => {
    //console.log(snapshot.docs[1].data());
    snapshot.docs.forEach(doc => {
      addstatus(doc.data().status);
    });
  })
  .catch(e => {
    console.log(e);
  });

//add documents using event listner and submit
form.addEventListener("click", e => {
  e.preventDefault();
  //console.log(form.hdog.value);
  //creating a json
  const status = {
    status: form.hdog.value
  };
  db.collection("hotdog-status")
    .add(status)
    .then(() => {
      console.log("successfully updated status");
      addstatus(form.hdog.value);
    })
    .catch(e => {
      console.log(e);
    });
});

//uploading a file in firebase storage
//later pass the refence in firebase database

fileButton.addEventListener("change", e => {
  let file = e.target.files[0];
  console.log(e.target.files[0]);
 
    // Points to the images root reference
    var storageRef = firebase.storage().ref('images/'+file.name);

    let task = storageRef.put(file);

  
});

