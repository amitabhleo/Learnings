//my first facebook app

//defining the user name password in a
var dataBase = [
  {
  userName: "amitabh",
  passWord: "supersecret"
}
];
//defining a newsFeed
var newsFeed =[
  {
    userName: "Sally",
    timeLine: "It is a very tiring day today!"
  },
  {
    userName: "betty",
  timeLine: "javaScript is so cool !"
}
];
//defining the function
var userNamePrompt = prompt("what is your username");
var passwordPrompt = prompt("what is your passWord");
//comparing the username password and then showin the newsFeed
function signIn(user,passwd){
  if(user === dataBase[0].userName &&
  passwd === dataBase[0].passWord){
    console.log(newsFeed);
  }
  else {
    console.log("username or password not right");
  }
}
signIn(userNamePrompt,passwordPrompt);
