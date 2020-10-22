const key = 'FmhU529C9kWxte8awkHVdg1uO9c1nI2P';

const WeatherCheck=(async(Id)=>{
     const base ='http://dataservice.accuweather.com/currentconditions/v1/';
     const query = `${Id}?apikey=${key}`;
     const response = await fetch(base+query);
     const data = await response.json();
     console.log(data);
     return data[0];
});
const GetCity = (async(city)=>{
       const base ='http://dataservice.accuweather.com/locations/v1/cities/search';
       const query =`?apikey=${key}&q=${city}`;
       const response = await fetch(base+query);
       const data = await response.json();
       console.log(data);
       return data[0];
});

/*GetCity('manchester').then(d=>{
     return WeatherCheck(d.Key);
}).then(d=>{
    console.log(d);
}).catch(d=>{
    console.log('error');
})*/
