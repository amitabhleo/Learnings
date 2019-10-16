alert("hello, world");
//testing callback fuction which comes in chapter 12
//now function seond is executing berofe funtion 1, now I want the 2 to only triiger after 1

const first1 =(callback) =>{
    //console.log('first function triggered');
    setTimeout(()=>{
      console.log('first function triggered');
        //console.log('first function called')
        callback('callback funcion called');
    },2000);
    
};


first1((argument) =>{
    console.log(argument);
});
//second();

//i want the second method to trigger after 

  const  first = (callback)=>{
    // Simulate a code delay
    setTimeout(()=>{
      console.log('set timeout called');
      callback('callback triggered');
    }, 3000 );
  }
  
    first((data)=>{
    console.log(data);
  });
 