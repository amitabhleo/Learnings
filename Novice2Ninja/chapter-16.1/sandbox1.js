//getting the form data

const form1 = document.querySelector("form");
const h2 = document.querySelector("h2");
const image = document.querySelector("img");
//console.log(image);
//image.src = ;
//changing image using url field
const changeImage = url => {
  //firebasestorage.googleapis.com/v0/b/my-family-9ae9d.appspot.com/o/images%2Fchqscan.jpg?alt=media&token=9cd5a69a-2c7a-4034-876e-372ba12782e4firebasestorage.googleapis.com/v0/b/my-family-9ae9d.appspot.com/o/images%2Fchqscan.jpg?alt=media&token=9cd5a69a-2c7a-4034-876e-372ba12782e4
  image.src = url;
};
//adding and appending the status
const addstatus = sts => {
  let html = `<h3>${sts} </h3>`;
  h2.innerHTML += html;
};
//get documents .get returns a promise
db.collection("hotdog-status")
  .get()
  .then(snapshot => {
    //console.log(snapshot.docs[1].data());
    snapshot.docs.forEach(doc => {
      addstatus(doc.data().status);
      console.log(doc.id);
      //console.log(doc.data());
    });
  })
  .catch(e => {
    console.log(e);
  });

//add documents using event listner and submit
form1.addEventListener("click", e => {
  e.preventDefault();
  //console.log(form.hdog.value);
  //creating a json
  addSts(form1.hdog.value, "http://amitabhleo.com");
});
//puting this in a function
let addSts = (stats, newUrl) => {
  var sts = {
    status: stats,
    url: newUrl
  };
  db.collection("hotdog-status")
    .add(sts)
    .then(() => {
      console.log("successfully updated status");
      addstatus(form1.hdog.value);
    })
    .catch(e => {
      console.log(e);
    });
};
//uploading a file in firebase storage
//later pass the refence in firebase database we will be using firebase doc.id

fileButton.addEventListener("change", e => {
  let file = e.target.files[0];
  console.log(e.target.files[0]);

  // Points to the images root reference
  var storageRef = firebase.storage().ref("images/" + file.name);

  //let task = storageRef.put(file);
  storageRef
    .put(file)
    .then(snapshot => {
      snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log("File available at", downloadURL);
        changeImage(downloadURL);
        const tempUrl = downloadURL;
        addSts('new file from fireStore',tempUrl);
      });
    })
    .catch(err => {
      console.log(err);
    });
});
//   var uploadTask = storageRef.put(file);

//   // Register three observers:
//   // 1. 'state_changed' observer, called any time the state changes
//   // 2. Error observer, called on failure
//   // 3. Completion observer, called on successful completion
//   uploadTask.on(
//     "state_changed",
//     function(snapshot) {
//       // Observe state change events such as progress, pause, and resume
//       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//       var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//       console.log("Upload is " + progress + "% done");
//       switch (snapshot.state) {
//         case firebase.storage.TaskState.PAUSED: // or 'paused'
//           console.log("Upload is paused");
//           break;
//         case firebase.storage.TaskState.RUNNING: // or 'running'
//           console.log("Upload is running");
//           break;
//       }
//     },
//     function(error) {
//       // Handle unsuccessful uploads
//     },
//     function() {
//       // Handle successful uploads on complete
//       // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//       uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
//         console.log("File available at", downloadURL);
//         changeImage(downloadURL);
//         const tempUrl = downloadURL;
//         addSts('new file from fireStore',tempUrl);
//       });
//     }
//   );
// });
