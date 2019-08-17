//using reduce array method to accumulate and 
//current value of the callback fucntion

const gamescores =[
    {player:'amitabh',score:34},
    {player:'geetanjali',score:15},
    {player:'mihir',score:10},
    {player:'megha',score:20},
    {player:'amitabh',score:34},
    {player:'geetanjali',score:15},
    {player:'mihir',score:10},
    {player:'megha',score:20},
    {player:'amitabh',score:34},
    {player:'geetanjali',score:15},
    {player:'mihir',score:10},
    {player:'megha',score:20},
    {player:'amitabh',score:3},
    {player:'geetanjali',score:15},
    {player:'mihir',score:10},
    {player:'megha',score:20}
];
//summing the score of player amitabh

const amitabhTotal = gamescores.reduce((acc,curr)=>{
    console.log(curr.player);
    if (curr.player === 'amitabh'){
        console.log(curr.player,curr.score);
        acc +=curr.score;
    }
        return acc;
},0);

console.log(amitabhTotal);

//array sort array.sort is a destructive method updates the same array


const nameSort =[
    {player:'amitabh',score:34},
    {player:'geetanjali',score:15},
    {player:'mihir',score:10},
    {player:'megha',score:20}
   
];

nameSort.sort((a,b) =>{
    if(a.score > b.score){
        return -1; 
    } else if(a.score < b.score){
            return 1;
    }else{
        return 0;
    }
});
//in single line same thing
//nameSort.sort((a,b)=> b.score - a.score);

console.log(nameSort);