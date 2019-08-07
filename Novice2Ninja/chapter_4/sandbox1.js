//callBack functions contd...
const persons = ['amitabh','Geetanjali','Mihir','Megha'];

//foreach has a callbak function

persons.forEach(function(people,index){
    console.log(index,people);
});

//converting to an arrow function

persons.forEach((people,index)=>{
    console.log (`index of ${index} value ${people}`)
});

//log person

const logperson = (person,index) =>{
    console.log(`element ${index} value is ${person}`)
};
//calling this from a for each
persons.forEach(logperson);