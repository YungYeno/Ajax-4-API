let weerButton = document.getElementById('weatherButton');
let weerButton2 = document.getElementById('weatherButton2');
let weatherTickerTape = document.getElementById('weatherTickerTape');
let weatherHere = document.getElementById('weatherHere');
let completeWeatherHere = document.getElementById('completeWeatherHere');
let ticker = document.getElementById('tickerTape');
let bier =  'img src="bier.png"'
let debug = true;//debuggen
//
weerButton.addEventListener('click', getWeather1);
weerButton2.addEventListener('click', getWeather2);
weatherTickerTape.addEventListener('click',getWeatherTicker);
//
let apiAdress = "http://weerlive.nl/api/json-data-10min.php?key=";
let key = "demo";
let locatie = "&locatie=";
let geoLocation = "Amsterdam";
let url = apiAdress + key + locatie + geoLocation;
function getWeather1(){
    weatherHere.innerHTML = "";
    makeAjaxCall(url, "GET"). then (showWeather1, errorHandler);
  }
function getWeather2(){
    weatherHere.innerHTML = "";
    makeAjaxCall(url, "GET"). then (showWeather2, errorHandler);
  }
function getLocation() {
  	if(navigator.geolocation) {
  		navigator.geolocation.getCurrentPosition(changeLocation);
  	} else {
  		x.innerHTML = "Geolocation is not supported by this browser.";
  	}
  }


function showWeather1(weatherString) {
    weatherHere.innerHTML = "";
    let weatherObject = JSON.parse(weatherString);
    console.log(weatherString);
    let selectie1 =
        weatherObject.liveweer[0].plaats +
        "<br> Temperatuur: " +
        weatherObject.liveweer[0].temp + " &#176;C" +
        "<br> Verwachting: " +
        weatherObject.liveweer[0].verw +
        "<br> Wolken: " +
        weatherObject.liveweer[0].samenv +
        "<br> d0tmax: " +
        weatherObject.liveweer[0].d0tmax +
        "<br> d0tmin: " +
        weatherObject.liveweer[0].d0tmin +
        "<br> d0neerslag: " +
        weatherObject.liveweer[0].d0neerslag +
        "<br> alarm: " +
        weatherObject.liveweer[0].alarm +
        "<br> image: " +
        weatherObject.liveweer[0].image +
        '<img src="iconen-weerlive/' + weatherObject.liveweer[0].image + '.png">'
        ;
        weatherHere.innerHTML = selectie1;
}
        function tickertape(weatherString) {
            tickerTape.innerHTML = "";
            let weatherObject = JSON.parse(weatherString);
            console.log(weatherString);
            let selectie =
                weatherObject.liveweer[0].plaats +
                " Temperatuur: " +
                weatherObject.liveweer[0].temp + " &#176;C" +
                " Verwachting: " +
                weatherObject.liveweer[0].verw +
                " Wolken: " +
                weatherObject.liveweer[0].samenv +
                " d0tmax: " +
                weatherObject.liveweer[0].d0tmax +
                " d0tmin: " +
                weatherObject.liveweer[0].d0tmin +
                " d0neerslag: " +
                weatherObject.liveweer[0].d0neerslag +
                " alarm: " +
                weatherObject.liveweer[0].alarm +
                " image: " +
                weatherObject.liveweer[0].image +
                '<img src="iconen-weerlive/' + weatherObject.liveweer[0].image + '.png">'

                ;
    tickerTape.innerHTML = selectie;


}
function showWeather2(weatherString){
  let weatherObject = JSON.parse(weatherString);
  let completeData = "";


for (const [key, value] of Object.entries(weatherObject.liveweer[0])){
    debug ? console.log('${key}: ${value}') : "";
    completeData += key + " : " + value + "<br>";
    weatherHere.innerHTML = completeData;
  }
}

function getWeatherTicker(){
 	weatherHere.innerHTML= "";
 	tickerTape.innerHTML= "";
 	makeAjaxCall(url, "GET"). then (tickertape, errorHandler);

}
