
// const getWeatherData = $.ajax({
//     url:`https://api.openweathermap.org/data/2.5/forecast?zip=02543,us&appid=672f4a88ea67ac0ba14af76fab150178`
//   }).then(
//     (data) => {
//      console.log(data);
//     },
//     (error) => {
//      console.log('bad request', error);
//     }
//   ); 

// Show forecasts for five days, there are 40 objects so we'll do [0], [8], [16], [27], [36]
// forecast will show Main {timestamp, temp, feels like, himidity} and weather {main} with icon and wind speed
// console.log(promise)


// variables
const URL = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&zip="


// element references
const $cityOne = $('.cityOne');
const $inputOne = $('input')
const $form = $('form');
const $dateTimeOne = $('.dateTimeOne')
const $forecastDayOne = $('.forecastDayOne')
const $tempOneDayOne = $('<li>')
const $feelsLikeOneDayOne = $('<li>')
const $weatherOne = $('<li>')
const $windSpeed = $('<li>')
const $dateTimeTwo = $('.dateTimeTwo')
const $forecastDayTwo = $('.forecastDayTwo')
const $feelsLikeOneDayTwo = $('<li>')
const $weatherTwo = $('<li>')
const $windSpeedDayTwo = $('<li>')
const $tempOneDayTwo = $('<li>')


// event listeners
$form.on('submit', handleGetData)

// functions

function handleGetData(e){

  event.preventDefault()
  console.log($inputOne.val())
  const finalInputOne = $inputOne.val() + ',us&appid=672f4a88ea67ac0ba14af76fab150178'
  $.ajax(URL + finalInputOne).then(function(data) {
      console.log('working')
      console.log(data)
      $cityOne.text(data.city.name)
      $dateTimeOne.text('Date & Time: ' + data.list[0].dt_txt)
      $tempOneDayOne.text('Temp: ' + data.list[0].main.temp + ' °F')
      $feelsLikeOneDayOne.text('Feels Like ' + data.list[0].main.feels_like + ' °F')
      $weatherOne.text(data.list[0].weather[0].main)
      $windSpeed.text('Wind Speeds: ' + data.list[0].wind.speed + ' MPH')
      $forecastDayOne.append($tempOneDayOne)
      $forecastDayOne.append($feelsLikeOneDayOne)
      $forecastDayOne.append($weatherOne)
      $forecastDayOne.append($windSpeed)
      // second day of first forecasts
      $dateTimeTwo.text('Date & Time: ' + data.list[8].dt_txt)
      $feelsLikeOneDayTwo.text('Feels Like ' + data.list[8].main.feels_like + ' °F')
      $tempOneDayTwo.text('Temp: ' + data.list[8].main.temp + ' °F')
      $weatherTwo.text(data.list[8].weather[0].main)
      $windSpeedDayTwo.text('Wind Speeds: ' + data.list[8].wind.speed + ' MPH')
      $forecastDayTwo.append($tempOneDayTwo)
      $forecastDayTwo.append($feelsLikeOneDayTwo)
      $forecastDayTwo.append($weatherTwo)
      $forecastDayTwo.append($windSpeedDayTwo)
    },
   function(error) {
    console.log('something is wrong')
    console.log(error)
})
 
}

