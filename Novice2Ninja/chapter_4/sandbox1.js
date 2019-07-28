//callBack functions contd...
const persons = ['amitabh','Geetanjali','Mihir','Megha'];

//foreach

persons.forEach(function(people,index){
    console.log(index,people);
});

//converting to an arrow function

// persons.forEach((people,index)=>{
//     console.log(index,people)}
//     );

//log person

const logPerson =(people,index)=>{
    console.log(`logged in ${index} person name ${people}`)
};

//passing this into the forEach

persons.forEach(logPerson);