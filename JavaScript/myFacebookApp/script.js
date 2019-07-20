//creating a database object
var database = [
    {
        username: "amitabh",
        password: "secret"
    },
    {
        username: "geetanjali",
        password: "123"
    },
    {
        username: "megha",
        password: "321"
    }
];
//creating a newsfeed object
var newsfeed = [
    {
        username: "andrie",
        timeline: "Ah it is a wonderful day!"
    },
    {
        username: "sally",
        timeline: "I love javaScript"
    }
];
//Using prompt to ask for the username
var promptUserName = prompt("what is your username ?");
var promptPassword = prompt("what is your password ?");
// do not repeat yourself checking if user is valid
function isUserValid(user,pass){
    //database.forEach(i){ need to check the syntax
    for (i=0;i<database.length;i++){
        if (database[i].username === user
            && database[i].password === pass){
               return true;
            }
        }
        return false;
}
//passing the prompt to function
function userSignIn (username,password){
    //checking if user is valid 
    //console.log(isUserValid(username,password));
    if (isUserValid(username,password)){
        console.log(newsfeed);
    }
     else alert ("wrong username or password !");   
}

userSignIn(promptUserName,promptPassword);
