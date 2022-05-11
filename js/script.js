
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

// Show forecasts for four days, there are 40 objects so we'll do [8], [15], [23], [31]
// forecast will show Main {timestamp, temp, feels like, himidity} and weather {main} with icon and wind speed
// console.log(promise)


// clear buttons - should be using .empty()

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
const $iconOneDayOne = $('<img>')

// location one day two element refs
const $dateTimeTwo = $('<li>')
const $forecastDayTwo = $('.forecastDayTwo')
const $feelsLikeOneDayTwo = $('<li>')
const $weatherTwo = $('<li>')
const $windSpeedDayTwo = $('<li>')
const $tempOneDayTwo = $('<li>')
const $iconOneDayTwo = $('<img>')

//location one day three element refs
const $dateTimeThree = $('<li>')
const $forecastDayThree = $('.forecastDayThree')
const $feelsLikeOneDayThree = $('<li>')
const $weatherThree = $('<li>')
const $windSpeedDayThree = $('<li>')
const $tempOneDayThree = $('<li>')
const $iconOneDayThree = $('<img>')

// location one day four element refs
const $dateTimeFour = $('<li>')
const $forecastDayFour = $('.forecastDayFour')
const $feelsLikeOneDayFour = $('<li>')
const $weatherFour = $('<li>')
const $windSpeedDayFour = $('<li>')
const $tempOneDayFour = $('<li>')
const $iconOneDayFour = $('<img>')

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
const $iconTwoDayOne = $('<img>')

// location two day two 
const $dateTimeLocTwoDayTwo = $('<li>')
const $forecastLocTwoDayTwo = $('.forecastLocTwoDayTwo')
const $tempLocTwoDayTwo = $('<li>')
const $feelsLikeLocTwoDayTwo = $('<li>')
const $weatherLocTwoDayTwo = $('<li>')
const $windSpeedLocTwoDayTwo = $('<li>')
const $iconTwoDayTwo = $('<img>')

// location two day three
const $dateTimeLocTwoDayThree = $('<li>')
const $forecastLocTwoDayThree = $('.forecastLocTwoDayThree')
const $tempLocTwoDayThree = $('<li>')
const $feelsLikeLocTwoDayThree = $('<li>')
const $weatherLocTwoDayThree = $('<li>')
const $windSpeedLocTwoDayThree = $('<li>')
const $iconTwoDayThree = $('<img>')

// location two day four
const $dateTimeLocTwoDayFour = $('<li>')
const $forecastLocTwoDayFour = $('.forecastLocTwoDayFour')
const $tempLocTwoDayFour = $('<li>')
const $feelsLikeLocTwoDayFour = $('<li>')
const $weatherLocTwoDayFour = $('<li>')
const $windSpeedLocTwoDayFour = $('<li>')
const $iconTwoDayFour = $('<img>')

// location three day one element refs 
const $cityThree = $('.cityThree');
const $inputThree = $('.inputThree');
const $buttonThree = $('#buttonThree');
const $dateTimeLocThreeDayOne = $('<li>')
const $forecastLocThreeDayOne = $('.forecastLocThreeDayOne')
const $tempLocThreeDayOne = $('<li>')
const $feelsLikeLocThreeDayOne = $('<li>')
const $weatherLocThreeDayOne = $('<li>')
const $windSpeedLocThreeDayOne = $('<li>')
const $iconThreeDayOne  = $('<img>')

// location three day two element refs 
const $dateTimeLocThreeDayTwo = $('<li>')
const $forecastLocThreeDayTwo = $('.forecastLocThreeDayTwo')
const $tempLocThreeDayTwo = $('<li>')
const $feelsLikeLocThreeDayTwo = $('<li>')
const $weatherLocThreeDayTwo = $('<li>')
const $windSpeedLocThreeDayTwo = $('<li>')
const $iconThreeDayTwo = $('<img>')

// location three day three element refs 
const $dateTimeLocThreeDayThree = $('<li>')
const $forecastLocThreeDayThree = $('.forecastLocThreeDayThree')
const $tempLocThreeDayThree = $('<li>')
const $feelsLikeLocThreeDayThree = $('<li>')
const $weatherLocThreeDayThree = $('<li>')
const $windSpeedLocThreeDayThree = $('<li>')
const $iconThreeDayThree = $('<img>')

// location three day three element refs 
const $dateTimeLocThreeDayFour = $('<li>')
const $forecastLocThreeDayFour = $('.forecastLocThreeDayFour')
const $tempLocThreeDayFour = $('<li>')
const $feelsLikeLocThreeDayFour = $('<li>')
const $weatherLocThreeDayFour = $('<li>')
const $windSpeedLocThreeDayFour = $('<li>')
const $iconThreeDayFour = $('<img>')

// location four day one element refs
const $cityFour = $('.cityFour');
const $inputFour = $('.inputFour');
const $buttonFour = $('#buttonFour');
const $dateTimeLocFourDayOne = $('<li>')
const $forecastLocFourDayOne = $('.forecastLocFourDayOne')
const $tempLocFourDayOne = $('<li>')
const $feelsLikeLocFourDayOne = $('<li>')
const $weatherLocFourDayOne = $('<li>')
const $windSpeedLocFourDayOne = $('<li>')
const $iconFourDayOne = $('<img>')

// location four day two element refs 
const $dateTimeLocFourDayTwo = $('<li>')
const $forecastLocFourDayTwo = $('.forecastLocFourDayTwo')
const $tempLocFourDayTwo = $('<li>')
const $feelsLikeLocFourDayTwo = $('<li>')
const $weatherLocFourDayTwo = $('<li>')
const $windSpeedLocFourDayTwo = $('<li>')
const $iconFourDayTwo = $('<img>')

// location four day three element refs 
const $dateTimeLocFourDayThree = $('<li>')
const $forecastLocFourDayThree = $('.forecastLocFourDayThree')
const $tempLocFourDayThree = $('<li>')
const $feelsLikeLocFourDayThree = $('<li>')
const $weatherLocFourDayThree = $('<li>')
const $windSpeedLocFourDayThree = $('<li>')
const $iconFourDayThree = $('<img>')

// location four day four element refs 
const $dateTimeLocFourDayFour = $('<li>')
const $forecastLocFourDayFour = $('.forecastLocFourDayFour')
const $tempLocFourDayFour = $('<li>')
const $feelsLikeLocFourDayFour = $('<li>')
const $weatherLocFourDayFour = $('<li>')
const $windSpeedLocFourDayFour = $('<li>')
const $iconFourDayFour = $('<img>')

// event listeners
$buttonOne.on('submit', handleGetData)
// event listener for location 2
$buttonTwo.on('submit', handleGetDataLocTwo)
// event listener for location 3
$buttonThree.on('submit', handleGetDataLocThree)
// event listener for location 4
$buttonFour.on('submit', handleGetDataLocFour)



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
      $iconOneDayOne.attr('src','http://openweathermap.org/img/wn/' + data.list[7].weather[0].icon + '@2x.png')
      $iconOneDayOne.attr('alt', data.list[7].weather[0].description)
      $dateTimeOne.text(data.list[7].dt_txt)
      $tempOneDayOne.text('Temp: ' + data.list[7].main.temp + ' °F')
      $feelsLikeOneDayOne.text('Feels Like ' + data.list[7].main.feels_like + ' °F')
      $weatherOne.text(data.list[7].weather[0].main + ": " + data.list[7].weather[0].description)
      $windSpeed.text('Wind Speeds: ' + data.list[7].wind.speed + ' MPH')
      $forecastDayOne.append($iconOneDayOne)
      $forecastDayOne.append($dateTimeOne)
      $forecastDayOne.append($tempOneDayOne)
      $forecastDayOne.append($feelsLikeOneDayOne)
      $forecastDayOne.append($weatherOne)
      $forecastDayOne.append($windSpeed)
      // second day of first forecasts
      $dateTimeTwo.text(data.list[15].dt_txt)
      $iconOneDayTwo.attr('src','http://openweathermap.org/img/wn/' + data.list[15].weather[0].icon + '@2x.png')
      $iconOneDayTwo.attr('alt', data.list[15].weather[0].description)
      $feelsLikeOneDayTwo.text('Feels Like ' + data.list[15].main.feels_like + ' °F')
      $tempOneDayTwo.text('Temp: ' + data.list[15].main.temp + ' °F')
      $weatherTwo.text(data.list[15].weather[0].main + ": " + data.list[15].weather[0].description)
      $windSpeedDayTwo.text('Wind Speeds: ' + data.list[15].wind.speed + ' MPH')
      $forecastDayTwo.append($iconOneDayTwo)
      $forecastDayTwo.append($dateTimeTwo)
      $forecastDayTwo.append($tempOneDayTwo)
      $forecastDayTwo.append($feelsLikeOneDayTwo)
      $forecastDayTwo.append($weatherTwo)
      $forecastDayTwo.append($windSpeedDayTwo)
      // third day of first forecast
      $dateTimeThree.text(data.list[23].dt_txt)
      $iconOneDayThree.attr('src', 'http://openweathermap.org/img/wn/' + data.list[23].weather[0].icon + '@2x.png')
      $iconOneDayThree.attr('alt', data.list[23].main.temp + ' °F')
      $feelsLikeOneDayThree.text('Feels Like ' + data.list[23].main.feels_like + ' °F')
      $tempOneDayThree.text('Temp: ' + data.list[23].main.temp + ' °F')
      $weatherThree.text(data.list[23].weather[0].main + ": " + data.list[23].weather[0].description)
      $windSpeedDayThree.text('Wind Speeds: ' + data.list[23].wind.speed + ' MPH')
      $forecastDayThree.append($iconOneDayThree)
      $forecastDayThree.append($dateTimeThree)
      $forecastDayThree.append($tempOneDayThree)
      $forecastDayThree.append($feelsLikeOneDayThree)
      $forecastDayThree.append($weatherThree)
      $forecastDayThree.append($windSpeedDayThree)
      // fourth day of first forecast
      $dateTimeFour.text(data.list[31].dt_txt)
      $iconOneDayFour.attr('src', 'http://openweathermap.org/img/wn/' + data.list[31].weather[0].icon + '@2x.png')
      $iconOneDayFour.attr('alt', data.list[31].weather[0].description)
      $feelsLikeOneDayFour.text('Feels Like ' + data.list[31].main.feels_like + ' °F')
      $tempOneDayFour.text('Temp: ' + data.list[31].main.temp + ' °F')
      $weatherFour.text(data.list[31].weather[0].main + ": " + data.list[31].weather[0].description)
      $windSpeedDayFour.text('Wind Speeds: ' + data.list[31].wind.speed + ' MPH')
      $forecastDayFour.append($iconOneDayFour)
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
      $iconTwoDayOne.attr('src','http://openweathermap.org/img/wn/' + data.list[7].weather[0].icon + '@2x.png')
      $iconTwoDayOne.attr('alt', data.list[7].weather[0].description)
      $tempLocTwoDayOne.text('Temp: ' + data.list[7].main.temp + ' °F')
      $feelsLikeLocTwoDayOne.text('Feels Like ' + data.list[7].main.feels_like + ' °F')
      $weatherLocTwoDayOne.text(data.list[7].weather[0].main + ": " + data.list[7].weather[0].description)
      $windSpeedLocTwoDayOne.text('Wind Speeds: ' + data.list[7].wind.speed + ' MPH')
      $forecastLocTwoDayOne.append($iconTwoDayOne)
      $forecastLocTwoDayOne.append($dateTimeLocTwoDayOne)
      $forecastLocTwoDayOne.append($tempLocTwoDayOne)
      $forecastLocTwoDayOne.append($feelsLikeLocTwoDayOne)
      $forecastLocTwoDayOne.append($weatherLocTwoDayOne)
      $forecastLocTwoDayOne.append($windSpeedLocTwoDayOne)
      // second location day two 
      $dateTimeLocTwoDayTwo.text(data.list[15].dt_txt)
      $iconTwoDayTwo.attr('src','http://openweathermap.org/img/wn/' + data.list[15].weather[0].icon + '@2x.png')
      $iconTwoDayTwo.attr('alt', data.list[15].weather[0].description)
      $tempLocTwoDayTwo.text('Temp: ' + data.list[15].main.temp + ' °F')
      $feelsLikeLocTwoDayTwo.text('Feels Like ' + data.list[15].main.feels_like + ' °F')
      $weatherLocTwoDayTwo.text(data.list[15].weather[0].main + ": " + data.list[15].weather[0].description)
      $windSpeedLocTwoDayTwo.text('Wind Speeds: ' + data.list[15].wind.speed + ' MPH')
      $forecastLocTwoDayTwo.append($iconTwoDayTwo)
      $forecastLocTwoDayTwo.append($dateTimeLocTwoDayTwo)
      $forecastLocTwoDayTwo.append($tempLocTwoDayTwo)
      $forecastLocTwoDayTwo.append($feelsLikeLocTwoDayTwo)
      $forecastLocTwoDayTwo.append($weatherLocTwoDayTwo)
      $forecastLocTwoDayTwo.append($windSpeedLocTwoDayTwo)
      // second location day three 
      $dateTimeLocTwoDayThree.text(data.list[23].dt_txt)
      $iconTwoDayThree.attr('src','http://openweathermap.org/img/wn/' + data.list[23].weather[0].icon + '@2x.png')
      $iconTwoDayThree.attr('alt', data.list[23].weather[0].description)
      $tempLocTwoDayThree.text('Temp: ' + data.list[23].main.temp + ' °F')
      $feelsLikeLocTwoDayThree.text('Feels Like ' + data.list[23].main.feels_like + ' °F')
      $weatherLocTwoDayThree.text(data.list[23].weather[0].main + ": " + data.list[23].weather[0].description)
      $windSpeedLocTwoDayThree.text('Wind Speeds: ' + data.list[23].wind.speed + ' MPH')
      $forecastLocTwoDayThree.append($iconTwoDayThree)
      $forecastLocTwoDayThree.append($dateTimeLocTwoDayThree)
      $forecastLocTwoDayThree.append($tempLocTwoDayThree)
      $forecastLocTwoDayThree.append($feelsLikeLocTwoDayThree)
      $forecastLocTwoDayThree.append($weatherLocTwoDayThree)
      $forecastLocTwoDayThree.append($windSpeedLocTwoDayThree)
      // second location day four 
      $dateTimeLocTwoDayFour.text(data.list[31].dt_txt)
      $iconTwoDayFour.attr('src','http://openweathermap.org/img/wn/' + data.list[31].weather[0].icon + '@2x.png')
      $iconTwoDayFour.attr('alt', data.list[31].weather[0].description)
      $tempLocTwoDayFour.text('Temp: ' + data.list[31].main.temp + ' °F')
      $feelsLikeLocTwoDayFour.text('Feels Like ' + data.list[31].main.feels_like + ' °F')
      $weatherLocTwoDayFour.text(data.list[31].weather[0].main + ": " + data.list[31].weather[0].description)
      $windSpeedLocTwoDayFour.text('Wind Speeds: ' + data.list[31].wind.speed + ' MPH')
      $forecastLocTwoDayFour.append($iconTwoDayFour)
      $forecastLocTwoDayFour.append($dateTimeLocTwoDayFour)
      $forecastLocTwoDayFour.append($tempLocTwoDayFour)
      $forecastLocTwoDayFour.append($feelsLikeLocTwoDayFour)
      $forecastLocTwoDayFour.append($weatherLocTwoDayFour)
      $forecastLocTwoDayFour.append($windSpeedLocTwoDayFour)
      
    },
    function(error) {
     console.log('something is wrong')
     console.log(error)
    })
}


// function for Third Location
function handleGetDataLocThree(e){

  event.preventDefault()
  console.log($inputThree.val())
  const finalInputThree = $inputThree.val() + ',us&appid=672f4a88ea67ac0ba14af76fab150178'
  $.ajax(URL + finalInputThree).then(function(data) {
      console.log('working')
      console.log(data)
      $cityThree.text('Forecast for ' + data.city.name)
      $iconThreeDayOne.attr('src','http://openweathermap.org/img/wn/' + data.list[7].weather[0].icon + '@2x.png')
      $iconThreeDayOne.attr('alt', data.list[7].weather[0].description)
      $dateTimeLocThreeDayOne.text(data.list[7].dt_txt)
      $tempLocThreeDayOne.text('Temp: ' + data.list[7].main.temp + ' °F')
      $feelsLikeLocThreeDayOne.text('Feels Like ' + data.list[7].main.feels_like + ' °F')
      $weatherLocThreeDayOne.text(data.list[7].weather[0].main + ": " + data.list[7].weather[0].description)
      $windSpeedLocThreeDayOne.text('Wind Speeds: ' + data.list[7].wind.speed + ' MPH')
      $forecastLocThreeDayOne.append($iconThreeDayOne)
      $forecastLocThreeDayOne.append($dateTimeLocThreeDayOne)
      $forecastLocThreeDayOne.append($tempLocThreeDayOne)
      $forecastLocThreeDayOne.append($feelsLikeLocThreeDayOne)
      $forecastLocThreeDayOne.append($weatherLocThreeDayOne)
      $forecastLocThreeDayOne.append($windSpeedLocThreeDayOne)
      // third location day two 
      $dateTimeLocThreeDayTwo.text(data.list[15].dt_txt)
      $iconThreeDayTwo.attr('src','http://openweathermap.org/img/wn/' + data.list[15].weather[0].icon + '@2x.png')
      $iconThreeDayTwo.attr('alt', data.list[15].weather[0].description)
      $tempLocThreeDayTwo.text('Temp: ' + data.list[15].main.temp + ' °F')
      $feelsLikeLocThreeDayTwo.text('Feels Like ' + data.list[15].main.feels_like + ' °F')
      $weatherLocThreeDayTwo.text(data.list[15].weather[0].main + ": " + data.list[15].weather[0].description)
      $windSpeedLocThreeDayTwo.text('Wind Speeds: ' + data.list[15].wind.speed + ' MPH')
      $forecastLocThreeDayTwo.append($iconThreeDayTwo)
      $forecastLocThreeDayTwo.append($dateTimeLocThreeDayTwo)
      $forecastLocThreeDayTwo.append($tempLocThreeDayTwo)
      $forecastLocThreeDayTwo.append($feelsLikeLocThreeDayTwo)
      $forecastLocThreeDayTwo.append($weatherLocThreeDayTwo)
      $forecastLocThreeDayTwo.append($windSpeedLocThreeDayTwo)
      // third location day three 
      $dateTimeLocThreeDayThree.text(data.list[23].dt_txt)
      $iconThreeDayThree.attr('src','http://openweathermap.org/img/wn/' + data.list[23].weather[0].icon + '@2x.png')
      $iconThreeDayThree.attr('alt', data.list[23].weather[0].description)
      $tempLocThreeDayThree.text('Temp: ' + data.list[23].main.temp + ' °F')
      $feelsLikeLocThreeDayThree.text('Feels Like ' + data.list[23].main.feels_like + ' °F')
      $weatherLocThreeDayThree.text(data.list[23].weather[0].main + ": " + data.list[23].weather[0].description)
      $windSpeedLocThreeDayThree.text('Wind Speeds: ' + data.list[23].wind.speed + ' MPH')
      $forecastLocThreeDayThree.append($iconThreeDayThree)
      $forecastLocThreeDayThree.append($dateTimeLocThreeDayThree)
      $forecastLocThreeDayThree.append($tempLocThreeDayThree)
      $forecastLocThreeDayThree.append($feelsLikeLocThreeDayThree)
      $forecastLocThreeDayThree.append($weatherLocThreeDayThree)
      $forecastLocThreeDayThree.append($windSpeedLocThreeDayThree)
      // third location day four
      $dateTimeLocThreeDayFour.text(data.list[31].dt_txt)
      $iconThreeDayFour.attr('src','http://openweathermap.org/img/wn/' + data.list[31].weather[0].icon + '@2x.png')
      $iconThreeDayFour.attr('alt', data.list[31].weather[0].description)
      $tempLocThreeDayFour.text('Temp: ' + data.list[31].main.temp + ' °F')
      $feelsLikeLocThreeDayFour.text('Feels Like ' + data.list[31].main.feels_like + ' °F')
      $weatherLocThreeDayFour.text(data.list[31].weather[0].main + ": " + data.list[15].weather[0].description)
      $windSpeedLocThreeDayFour.text('Wind Speeds: ' + data.list[31].wind.speed + ' MPH')
      $forecastLocThreeDayFour.append($iconThreeDayFour)
      $forecastLocThreeDayFour.append($dateTimeLocThreeDayFour)
      $forecastLocThreeDayFour.append($tempLocThreeDayFour)
      $forecastLocThreeDayFour.append($feelsLikeLocThreeDayFour)
      $forecastLocThreeDayFour.append($weatherLocThreeDayFour)
      $forecastLocThreeDayFour.append($windSpeedLocThreeDayFour)

    },
    function(error) {
     console.log('something is wrong')
     console.log(error)
    })
  }


// function for fourth Location
  function handleGetDataLocFour(e){

    event.preventDefault()
    console.log($inputFour.val())
    const finalInputFour = $inputFour.val() + ',us&appid=672f4a88ea67ac0ba14af76fab150178'
    $.ajax(URL + finalInputFour).then(function(data) {
        console.log('working')
        console.log(data)
        $cityFour.text('Forecast for ' + data.city.name)
        $dateTimeLocFourDayOne.text(data.list[7].dt_txt)
        $iconFourDayOne.attr('src','http://openweathermap.org/img/wn/' + data.list[7].weather[0].icon + '@2x.png')
        $iconFourDayOne.attr('alt', data.list[7].weather[0].description)
        $tempLocFourDayOne.text('Temp: ' + data.list[7].main.temp + ' °F')
        $feelsLikeLocFourDayOne.text('Feels Like ' + data.list[7].main.feels_like + ' °F')
        $weatherLocFourDayOne.text(data.list[7].weather[0].main + ": " + data.list[7].weather[0].description)
        $windSpeedLocFourDayOne.text('Wind Speeds: ' + data.list[7].wind.speed + ' MPH')
        $forecastLocFourDayOne.append($iconFourDayOne)
        $forecastLocFourDayOne.append($dateTimeLocFourDayOne)
        $forecastLocFourDayOne.append($tempLocFourDayOne)
        $forecastLocFourDayOne.append($feelsLikeLocFourDayOne)
        $forecastLocFourDayOne.append($weatherLocFourDayOne)
        $forecastLocFourDayOne.append($windSpeedLocFourDayOne)
        // Day Two 
        $dateTimeLocFourDayTwo.text(data.list[15].dt_txt)
        $iconFourDayTwo.attr('src','http://openweathermap.org/img/wn/' + data.list[15].weather[0].icon + '@2x.png')
        $iconFourDayTwo.attr('alt', data.list[15].weather[0].description)
        $tempLocFourDayTwo.text('Temp: ' + data.list[15].main.temp + ' °F')
        $feelsLikeLocFourDayTwo.text('Feels Like ' + data.list[15].main.feels_like + ' °F')
        $weatherLocFourDayTwo.text(data.list[15].weather[0].main + ": " + data.list[15].weather[0].description)
        $windSpeedLocFourDayTwo.text('Wind Speeds: ' + data.list[15].wind.speed + ' MPH')
        $forecastLocFourDayTwo.append($iconFourDayTwo)
        $forecastLocFourDayTwo.append($dateTimeLocFourDayTwo)
        $forecastLocFourDayTwo.append($tempLocFourDayTwo)
        $forecastLocFourDayTwo.append($feelsLikeLocFourDayTwo)
        $forecastLocFourDayTwo.append($weatherLocFourDayTwo)
        $forecastLocFourDayTwo.append($windSpeedLocFourDayTwo)
        // Day Three
        $dateTimeLocFourDayThree.text(data.list[23].dt_txt)
        $iconFourDayThree.attr('src','http://openweathermap.org/img/wn/' + data.list[23].weather[0].icon + '@2x.png')
        $iconFourDayThree.attr('alt', data.list[23].weather[0].description)
        $tempLocFourDayThree.text('Temp: ' + data.list[23].main.temp + ' °F')
        $feelsLikeLocFourDayThree.text('Feels Like ' + data.list[23].main.feels_like + ' °F')
        $weatherLocFourDayThree.text(data.list[23].weather[0].main + ": " + data.list[23].weather[0].description)
        $windSpeedLocFourDayThree.text('Wind Speeds: ' + data.list[23].wind.speed + ' MPH')
        $forecastLocFourDayThree.append($iconFourDayThree)
        $forecastLocFourDayThree.append($dateTimeLocFourDayThree)
        $forecastLocFourDayThree.append($tempLocFourDayThree)
        $forecastLocFourDayThree.append($feelsLikeLocFourDayThree)
        $forecastLocFourDayThree.append($weatherLocFourDayThree)
        $forecastLocFourDayThree.append($windSpeedLocFourDayThree)
        // day four
        $dateTimeLocFourDayFour.text(data.list[31].dt_txt)
        $iconFourDayFour.attr('src','http://openweathermap.org/img/wn/' + data.list[31].weather[0].icon + '@2x.png')
        $iconFourDayFour.attr('alt', data.list[31].weather[0].description)
        $tempLocFourDayFour.text('Temp: ' + data.list[31].main.temp + ' °F')
        $feelsLikeLocFourDayFour.text('Feels Like ' + data.list[31].main.feels_like + ' °F')
        $weatherLocFourDayFour.text(data.list[31].weather[0].main + ": " + data.list[31].weather[0].description)
        $windSpeedLocFourDayFour.text('Wind Speeds: ' + data.list[31].wind.speed + ' MPH')
        $forecastLocFourDayFour.append($iconFourDayFour)
        $forecastLocFourDayFour.append($dateTimeLocFourDayFour)
        $forecastLocFourDayFour.append($tempLocFourDayFour)
        $forecastLocFourDayFour.append($feelsLikeLocFourDayFour)
        $forecastLocFourDayFour.append($weatherLocFourDayFour)
        $forecastLocFourDayFour.append($windSpeedLocFourDayFour)

      },
      function(error) {
       console.log('something is wrong')
       console.log(error)
      })
    }