var cityName = document.querySelector('div#cityName')

const apiKey = '0e7292031e57d5fd6ec254f6f07c0676'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${apiKey}&units=metric&lang=pt_br`

