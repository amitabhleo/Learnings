//creating a JS object with properties
const blogs = [
    {title:"Learning Salesforce for Beginers",likes: 30},
    {title:"Learning Developer dot force dot com",likes: 50},
];
console.log('outside the object checking the blogs');
console.log(blogs);


let user = {
    name: "Amitabh",
    age: 55,
    email: "amitabhleo@gmail.com",
    location: "New Delhi",
    blogs: [
        {title:"Learning Salesforce for Beginers",likes: 30},
        {title:"Learning Developer dot force dot com",likes: 50}
    ],
    //login: function(){
     login(){   
        console.log('user logged in');
    },
    logout(){
        console.log('user logged out');
    },
    
    //fething the blogs which is an array in the object using this key word
    logBlogs(){
        //returning an array of blogs now using foreach iterate
        console.log('this.blogs returns an array which is iterated using foreach');
            this.blogs.forEach( (blog,index )=>{
            console.log(index,blog.title,blog.likes);
        })
    }
};

console.log(`before update age is ${user.age}`);
user.age = 45;
console.log(user.age);
//chaging the user.name
user['name'] = 'Geetanjali';
console.log(user.name);
console.log(user['name']);
console.log(typeof user);
user.login();
//showing what this will return a window object
console.log(this);
//this will return the user again
user.logBlogs();
//javascript Math object
const random = Math.random();
console.log(random);
console.log(Math.round(random * 100));