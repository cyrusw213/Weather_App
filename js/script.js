
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
const $inputOne = $('.inputOne')
const $buttonOne = $('#buttonOne');
const $dateTimeOne = $('<li>')
const $forecastDayOne = $('.forecastDayOne')
const $tempOneDayOne = $('<li>')
const $feelsLikeOneDayOne = $('<li>')
const $weatherOne = $('<li>')
const $windSpeed = $('<li>')
// location one day two element refs
const $dateTimeTwo = $('<li>')
const $forecastDayTwo = $('.forecastDayTwo')
const $feelsLikeOneDayTwo = $('<li>')
const $weatherTwo = $('<li>')
const $windSpeedDayTwo = $('<li>')
const $tempOneDayTwo = $('<li>')
//location one day three element refs
const $dateTimeThree = $('<li>')
const $forecastDayThree = $('.forecastDayThree')
const $feelsLikeOneDayThree = $('<li>')
const $weatherThree = $('<li>')
const $windSpeedDayThree = $('<li>')
const $tempOneDayThree = $('<li>')
// location one day four element refs
const $dateTimeFour = $('<li>')
const $forecastDayFour = $('.forecastDayFour')
const $feelsLikeOneDayFour = $('<li>')
const $weatherFour = $('<li>')
const $windSpeedDayFour = $('<li>')
const $tempOneDayFour = $('<li>')
// location two day one element refs 
const $cityTwo = $('.cityTwo');
const $inputTwo = $('.inputTwo');
const $buttonTwo = $('#buttonTwo');
const $dateTimeLocTwoDayOne = $('<li>')
const $forecastLocTwoDayOne = $('.forecastLocTwoDayOne')
const $tempLocTwoDayOne = $('<li>')
const $feelsLikeLocTwoDayOne = $('<li>')
const $weatherLocTwoDayOne = $('<li>')
const $windSpeedLocTwoDayOne = $('<li>')

// event listeners
$buttonOne.on('submit', handleGetData)
// event listener for location 2
$buttonTwo.on('submit', handleGetDataLocTwo)


// functions
// function for First Location
function handleGetData(e){

  event.preventDefault()
  console.log($inputOne.val())
  const finalInputOne = $inputOne.val() + ',us&appid=672f4a88ea67ac0ba14af76fab150178'
  $.ajax(URL + finalInputOne).then(function(data) {
      console.log('working')
      console.log(data)
      $cityOne.text('Forecast for ' + data.city.name)
      $dateTimeOne.text(data.list[7].dt_txt)
      $tempOneDayOne.text('Temp: ' + data.list[7].main.temp + ' °F')
      $feelsLikeOneDayOne.text('Feels Like ' + data.list[7].main.feels_like + ' °F')
      $weatherOne.text(data.list[7].weather[0].main)
      $windSpeed.text('Wind Speeds: ' + data.list[7].wind.speed + ' MPH')
      $forecastDayOne.append($dateTimeOne)
      $forecastDayOne.append($tempOneDayOne)
      $forecastDayOne.append($feelsLikeOneDayOne)
      $forecastDayOne.append($weatherOne)
      $forecastDayOne.append($windSpeed)
      // second day of first forecasts
      $dateTimeTwo.text(data.list[15].dt_txt)
      $feelsLikeOneDayTwo.text('Feels Like ' + data.list[15].main.feels_like + ' °F')
      $tempOneDayTwo.text('Temp: ' + data.list[15].main.temp + ' °F')
      $weatherTwo.text(data.list[15].weather[0].main)
      $windSpeedDayTwo.text('Wind Speeds: ' + data.list[15].wind.speed + ' MPH')
      $forecastDayTwo.append($dateTimeTwo)
      $forecastDayTwo.append($tempOneDayTwo)
      $forecastDayTwo.append($feelsLikeOneDayTwo)
      $forecastDayTwo.append($weatherTwo)
      $forecastDayTwo.append($windSpeedDayTwo)
      // third day of first forecast
      $dateTimeThree.text(data.list[23].dt_txt)
      $feelsLikeOneDayThree.text('Feels Like ' + data.list[23].main.feels_like + ' °F')
      $tempOneDayThree.text('Temp: ' + data.list[23].main.temp + ' °F')
      $weatherThree.text(data.list[23].weather[0].main)
      $windSpeedDayThree.text('Wind Speeds: ' + data.list[23].wind.speed + ' MPH')
      $forecastDayThree.append($dateTimeThree)
      $forecastDayThree.append($tempOneDayThree)
      $forecastDayThree.append($feelsLikeOneDayThree)
      $forecastDayThree.append($weatherThree)
      $forecastDayThree.append($windSpeedDayThree)
      // fourth day of first forecast
      $dateTimeFour.text(data.list[31].dt_txt)
      $feelsLikeOneDayFour.text('Feels Like ' + data.list[31].main.feels_like + ' °F')
      $tempOneDayFour.text('Temp: ' + data.list[31].main.temp + ' °F')
      $weatherFour.text(data.list[31].weather[0].main)
      $windSpeedDayFour.text('Wind Speeds: ' + data.list[31].wind.speed + ' MPH')
      $forecastDayFour.append($dateTimeFour)
      $forecastDayFour.append($tempOneDayFour)
      $forecastDayFour.append($feelsLikeOneDayFour)
      $forecastDayFour.append($weatherFour)
      $forecastDayFour.append($windSpeedDayFour)
    },
   function(error) {
    console.log('something is wrong')
    console.log(error)
})
 
}

// function for Second Location
function handleGetDataLocTwo(e){

  event.preventDefault()
  console.log($inputTwo.val())
  const finalInputTwo = $inputTwo.val() + ',us&appid=672f4a88ea67ac0ba14af76fab150178'
  $.ajax(URL + finalInputTwo).then(function(data) {
      console.log('working')
      console.log(data)
      $cityTwo.text('Forecast for ' + data.city.name)
      $dateTimeLocTwoDayOne.text(data.list[7].dt_txt)
      $tempLocTwoDayOne.text('Temp: ' + data.list[7].main.temp + ' °F')
      $feelsLikeLocTwoDayOne.text('Feels Like ' + data.list[7].main.feels_like + ' °F')
      $weatherLocTwoDayOne.text(data.list[7].weather[0].main)
      $windSpeedLocTwoDayOne.text('Wind Speeds: ' + data.list[7].wind.speed + ' MPH')
      $forecastLocTwoDayOne.append($dateTimeLocTwoDayOne)
      $forecastLocTwoDayOne.append($tempLocTwoDayOne)
      $forecastLocTwoDayOne.append($feelsLikeLocTwoDayOne)
      $forecastLocTwoDayOne.append($weatherLocTwoDayOne)
      $forecastLocTwoDayOne.append($windSpeedLocTwoDayOne)
    },
    function(error) {
     console.log('something is wrong')
     console.log(error)
    })
  }