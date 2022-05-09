# Name
**Where Should We Go This Weekend?**

## Description & Features
This application enables users to check the weather forecast for up to four different zip codes at once. Using the forecasts in front of them they can decide where they want to visit that weekend. 

## Visuals
![Screen Shot 2022-05-06 at 3 17 35 PM](https://user-images.githubusercontent.com/65954177/167203734-e6b48baa-4530-4b83-9ef8-2ce667acdf3b.png)

## Technologies Used
HTML, CSS, JavaScript, jQuery

## Future Enhancements
I would like to update this app to make suggestions based on the weather. Maybe it has a dropdown initially asking what activities you want to do that weekend. If you select ski/snowboard then it would recommend you visit the colder/snowier zip code. If you say you want to relax and swim it would recommend a drier and warmer climate. 

The API Request by Zip Code will be deprecated soon according to OpenWeather's documentation. To get ready for that I will need to also implement their Geocoding API which will allow me to convert a user's Zip code into the Lat & Long parameters needed for the 16 Day Forecast API call.

## References
Data Courtesy of [OpenWeather's 16 Day Forecast](https://openweathermap.org/forecast16). Also see their built in [API Request by Zip Code](https://openweathermap.org/forecast16#zip16)
