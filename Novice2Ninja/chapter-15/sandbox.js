class User {
  constructor(username, email) {
    //setup properties
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just logged in `);
    return this;
  }
  logout() {
    console.log(`${this.username} just logged out `);
    return this;
  }
  incScore(){
      this.score += 1;
      console.log(`${this.username} has score of ${this.score}`);
      return this;
  }
}

class Admin extends User{
    constructor(username,email,title){
        super(username,email);
      this.title = title;  
    }
    deleteUser(user){
        users = users.filter((u)=>{
            return u.username != user.username;
        })
    }
}

const userOne = new User("mario", "mario@gmail.com");
const userTwo = new User("luigi", "luigi@gmail.com");
const userThree = new Admin('Shaun','Shaun@gmail.com','black-belt');

console.log(userOne,userTwo,userThree);

userOne.login().incScore().incScore().logout();

users = [userOne,userTwo,userThree];
userThree.deleteUser(userTwo);

console.log(users);

