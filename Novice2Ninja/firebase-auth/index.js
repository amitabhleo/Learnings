//getting user email and password

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
     document.getElementById("user_div").style.display = "block";
     document.getElementById("login_div").style.display = "none";
    } else {
      // No user is signed in.
      document.getElementById("user_div").style.display = "none";
     document.getElementById("login_div").style.display = "block";
    }
  });

let login = document.querySelector("#login");
//TODO: add event lister is a call back function
login.addEventListener("click", evnt =>{
    let useremail = document.getElementById("email").value;
    let userpassword = document.getElementById("password").value;
    // alert("login clicked");
    // console.log(useremail);
    // console.log(userpassword);
    //TODO:copied from firebase
    firebase.auth().createUserWithEmailAndPassword(useremail, userpassword)
    .then(snapshot =>{
        console.log(snapshot.user.email);
        console.log(snapshot.user.uid);
     
    })
    .catch(function(error) {
        // Handle Errors here.
         var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("error msg :"+ error.message);
        // ...
      });

});
let logout = document.querySelector("#logout");
logout.addEventListener("click",evnt =>{
    //TODO:paste from firebase
    firebase.auth().signOut().then(function(){
        // Sign-out successful.
        //windows.alert(user.email +"successfully signed off");
      }).catch(function(error) {
        // An error happened.
      });
})