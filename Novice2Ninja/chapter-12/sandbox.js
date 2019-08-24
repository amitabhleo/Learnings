const getTodos = (callback) =>{
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',()=>{
        //console.log(request,request.readyState);
        if(request.readyState === 4 && request.status === 200 ){
            //console.log(request,request.responseText);
            //parsing the JSON
            const data = JSON.parse(request.responseText);
            callback(undefined,data);
        }
        else if (request.readyState === 4){
            //console.log('could not fetch records');
            callback('could not fetch data',undefined);
        }
    });
    
    //request.open('get','https://jsonplaceholder.typicode.com/todos/');
    request.open('get','shaunTodos.json');
    request.send();
};
console.log(1);
console.log(2);

//creating a call back you can say any name
//pass 2 parameters, convention is first error then data
getTodos((err,data)=>{
    console.log('callback fired');
    //console.log(err,data);
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
console.log(3);
console.log(4);
