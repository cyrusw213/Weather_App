# Name
**Weather Side by Side**

## Description & Features
This application enables users to check the weather forecast for up to four different zip codes at once. Using the forecasts in front of them they can decide where they want to visit that weekend. 

## Visuals
![Screen Shot 2022-05-06 at 3 17 35 PM](https://user-images.githubusercontent.com/65954177/167203734-e6b48baa-4530-4b83-9ef8-2ce667acdf3b.png)

## Technologies Used
HTML, CSS, JavaScript, jQuery

## Getting Started
[Click Here](https://timely-florentine-3ec0a2.netlify.app/) to deploy the app!

## Future Enhancements
- I would like to update this app to make suggestions based on the weather. Maybe it has a dropdown initially asking what activities you want to do that weekend. If you select ski/snowboard then it would recommend you visit the colder/snowier zip code. If you say you want to relax and swim it would recommend a drier and warmer climate. 

- The API Request by Zip Code will be deprecated soon according to OpenWeather's documentation. To get ready for that I will need to also implement their Geocoding API which will allow me to convert a user's Zip code into the Lat & Long parameters needed for the 16 Day Forecast API call.

- normalize the times that it pulls so it shows each days forecast for noon or 3 pm. currently it takes the seventh index as the first forecast, this always shows at least 24 hours after the pull but depending on when the user checks the forecast it will give either midnight, 3 am, 6 am, 9 am, noon, 3 pm, 6 pm, 9 pm

- add state to the city that shows up

## References
- Data Courtesy of [OpenWeather's 5 Day / 3 Hour Forecast](https://openweathermap.org/forecast5). Specifically, their built in [API Request by Zip Code](https://openweathermap.org/forecast5#zip5)
- [OpenWeatherMap API Tutorial 2021](https://www.youtube.com/watch?v=nGVoHEZojiQ)
- [Build Weather App With Ajax Using Open Weather Map API: Weather Icons and Units](https://www.youtube.com/watch?v=IfG4A8YfxsY&t=485s)