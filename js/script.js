
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
const URL = "https://api.openweathermap.org/data/2.5/forecast?zip="


// element references
const $cityOne = $('.cityOne');
const $inputOne = $('input')
const $form = $('form');
const $forecastOne = $('.forecastOne')
const $forecastListOne = $('<li>')

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
      $forecastOne.text('Date & Time: ' + data.list[0].dt_txt)
      $forecastListOne.text('Temp: ' + data.list[0].main.temp)
      $forecastOne.append($forecastListOne)
    },
   function(error) {
    console.log('something is wrong')
    console.log(error)
})
 
}

