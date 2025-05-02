const apikey="d0ad4465ffbe9e246f4e98da055a4cc5";

const weather_dataEl=document.getElementById("weather-data");
const city_inputEl=document.getElementById("city-input");


const formEl=document.querySelector("form");

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    const city_value=city_inputEl.value;
    console.log(city_value);
    getWeather_data(city_value);



});
async function getWeather_data(city_value){
    try {
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_value}&appid=${apikey}&units=metric`)
if(!response.ok){
    throw new Error("Network responsed was not ok")

}
const data=await response.json()
console.log(data);
const temperture=Math.round(data.main.temp);
const description = data.weather[0].description;
const icon=data.weather[0].icon;
const details=[
    `Fells like:${Math.round(data.main.feels_like)}`,
    `Humidity: ${data.main.humidity}%`,
    `Wind speed: ${data.wind.speed} m/s`,

];
weather_dataEl.querySelector(".icon").innerHTML=`<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`
weather_dataEl.querySelector(
    ".temperature"
).textContent=`${temperture}°C`;
weather_dataEl.querySelector(".description").textContent = description;
weather_dataEl.querySelector(".details").innerHTML= details.map((
    details)=>
`<div>${details}</div>`
).join("");
    } 
    catch (error) {
        weather_dataEl.querySelector(".icon").innerHTML="";
        weather_dataEl.querySelector(
            ".temperature"
        ).textContent="";
 weather_dataEl.querySelector(".description").textContent = "An error happended please try again later";
  
        weather_dataEl.querySelector(".details").innerHTML=""
    }
}