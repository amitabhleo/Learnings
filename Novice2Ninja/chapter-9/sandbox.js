const scores = [10,30,15,50,25,20,5];
// console.log(scores);
// const filteredscores = scores.filter((score) =>{
//     return score > 20;
// });
// console.log(filteredscores);

const users = [
    {name:'amitabh',premium:true},
    {name:'geetanjali',premium:true},
    {name:'mihir',premium:true},
    {name:'megha',premium:false},
];

console.log(users);
//since filter is a nondestructive method it has to pass to a new variable
const premiumUsers = users.filter(user => {
    return user.premium;
})
console.log(premiumUsers);

//map methods
const halfScores = scores.map(score => score/2);

console.log(halfScores);