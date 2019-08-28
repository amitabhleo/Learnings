//calling a http request object instantiating 

const getTodos = (resource)=>{

    return new Promise ((resolve,reject) =>{
        const request = new XMLHttpRequest();
        //will get the statechange field
        request.addEventListener('readystatechange',()=>{
            //console.log(request,request.readyState);
            if(request.readyState === 4 && request.status === 200){
                //passing the responseText to parse as Javascript
                const data = JSON.parse(request.responseText)
                //callback(undefined,data);
                resolve(data);
            }
            else if (request.readyState === 4 ){
                //console.log('could not fetch the data');
                //callback('could not fetch the data',undefined);
                reject('could not fetch data');
            }
        });
        
        //request.open('GET','https://jsonplaceholder.typicode.com/todos/');
        request.open('GET',resource);
        request.send();
        });
    };
//calling todos when returned a promise

getTodos ('todos/amitabhTodos.json').then((data)=>{
    console.log('promise 1 resolved: ',data);
    return getTodos ('todos/geetanjaliTodos.json');
}).then((data)=>{
    console.log('promise 2  resolved: ',data)
}).catch (err=>{
    console.log('error:',err);
});

//adding a callback function you can name anything
//passing 2 arguments err and data
// getTodos('todos/amitabhTodos.json',(err,data)=>{
//     console.log('callback fired');
//     console.log(err,data);
//     getTodos('todos/geetanjaliTodos.json',(err,data)=>{
//         console.log('callback fired');
//         console.log(err,data);
//     });
// });
