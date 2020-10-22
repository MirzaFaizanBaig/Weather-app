const cityForm =document.querySelector('form');
const card = document.querySelector('.card');
const details= document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const updateUI = data=> {
    // const cityDet = data.cityDet;
    // const weather=data.weather;
    //DESTRUCTRING
    const { cityDet, weather } = data;
    console.log(data);
    // update details
    details.innerHTML = `<div>
      <h5 class="my-3">${cityDet.EnglishName}</h5>
     <div class="my-3">${weather.WeatherText}</div>
     <div class="display-4 my-4">
         <span>${weather.Temperature.Metric.Value}</span>
         <span>&deg;c</span>
         </div>
     `;
       const iconsrc = `weather_app/img/icons/${weather.WeatherIcon}.svg`;
       icon.setAttribute('src',iconsrc);
       
        // image insert
        let timesrc=weather.IsDayTime?'weather_app/img/day.svg':'weather_app/img/night.svg';
     /*  let timesrc=null;
       if(weather.IsDayTime==true){
           timesrc="weather_app/img/day.svg"
       } else{
           timesrc="weather_app/img/night.svg"
       } */
       time.setAttribute('src',timesrc);


    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    };
} 
const updateCity = (async(city)=>{
    const cityDet =  await GetCity(city);
    const weather =  await WeatherCheck(cityDet.Key);
    return{cityDet,weather};
});
cityForm.addEventListener('submit',e=>{
    // prevent default
    e.preventDefault();
    // get city value
    const city =cityForm.city.value.trim(); // name and value from html
   
    cityForm.reset();

  // update UI with city
updateCity(city)
.then(data=> updateUI(data))
.catch(err=>console.log(err));

// storing in local storage
localStorage.setItem('place',city);

});
 
if(localStorage.getItem('place')){
    updateCity(localStorage.getItem('place'))
    .then(data=>updateUI(data))
    .catch(err=>console.log(err));
};