//using fetch api which returns a promise

// fetch('todos/amitabhTodos.json').then((response)=>{
//     //console.log('resolved',response)
//     //we did not get data so 
//     //if we use respnse.json() it return a promise
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log('rejected',err)
// });


//using async and await

const getTodos1 = async ()=>{

    const response = await fetch('todos/amitabhTodos.json');
    const data = await response.json();
  
    return data;
    //console.log(data);
};
//async allways return a promise

getTodos1().then((data)=>{
    console.log('resolved : ',data);
});
