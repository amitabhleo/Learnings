//creating a complex product price discount

const products = [
    {name:'apples',price:30},
    {name:'grapes',price:45},
    {name:'guaves',price:20},
    {name:'bananas',price:55}
  ];

  //creating a new salesproduct where all prices
  //greter than 30 should be half

  const salesProducts = products.map((product)=>{
      if(product.price >30){
          //this is returning an object
          return{name:product.name,price:product.price / 2 };
      }else{
        return product;
      }
     });

     console.log (salesProducts);