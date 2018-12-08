//my first facebook app

//defining the user name password in a
var dataBase = [
  {
  userName: "amitabh",
  passWord: "0408"
},
{
userName: "geetanjali",
passWord: "2101"
},
{
userName: "megha",
passWord: "2511"
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

//comparing the username password and then showin the newsFeed
function isUserValid(user,passwd){
  for (i=0; i < dataBase.length; i++){
    if (dataBase[i].userName === userNamePrompt &&
    dataBase[i].passWord === passwordPrompt){
      return true;
    }
  }
  return false;
}
function signIn(user,passwd){
  if (isUserValid(user,passwd)){
    console.log(newsFeed);
    }
  else {
    alert("sorry, wrong user name or password")
  }
}

//defining the function
var userNamePrompt = prompt("what is your username");
var passwordPrompt = prompt("what is your passWord");
signIn(userNamePrompt,passwordPrompt);
