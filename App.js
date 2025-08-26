const apiKey = "a3508e411e614c852335d2579ff32200";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const Weathericon = document.querySelector(".Weather-icon");

async function CheckWeather(city) {
  console.log(city);
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
   if(response.status == 404){
    document.querySelector(".error").style.display ="block";
    document.querySelector(".weather").style.display ="none";
   }else{
       var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main =="Clouds"){
      Weathericon.src = "cloud.webp"
      Weathericon.style.marginBottom = "34px";
    }else if(data.weather[0].main =="Clear"){
      Weathericon.src = "clear.webp"
      Weathericon.style.marginBottom = "34px";
    }else if(data.weather[0].main =="Rain"){
      Weathericon.src = "Rain.png"
      Weathericon.style.marginBottom = "34px";
    }else if(data.weather[0].main =="Drizzle"){
      Weathericon.src = "Drizzel.png"
      Weathericon.style.marginBottom = "34px";
    }else if(data.weather[0].main =="Mist"){
      Weathericon.src = "mist.webp"
      Weathericon.style.marginBottom = "34px";
    }else if(data.weather[0].main =="Snow"){
      Weathericon.src = "snow.png"
      Weathericon.style.marginBottom = "34px";
    }


    document.querySelector(".weather").style.display="block";
     document.querySelector(".error").style.display ="none";
              
   }

 

}

searchBtn.addEventListener("click", () => {
  CheckWeather(searchBox.value);
});
