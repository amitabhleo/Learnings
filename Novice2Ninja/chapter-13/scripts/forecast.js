const key = 'XukjGIatzK59gJpLZ2EOxPCO80LJqNAF';
//get weather information
const getWeather = async (id) =>{

    const base = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch (base + query);
    const data = await response.json();
    
    console.log(data);
    return data[0];
};
//get city infomation
const getCity = async (city)=>{

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey= ${key}&q=${city}`;

    const response = await fetch(base + query );
    const data = await response.json();

    //console.log(data[0]);
    //this returns a promise
    return data[0];

};

// getCity('manchester')
// .then(data =>{
//     //console.log(data)
//    return getWeather(data.Key);
// }).then(data => {
//     console.log(data);
// })
// .catch(err =>console.log(err));
// //used just for testing
// //getWeather("329260");
