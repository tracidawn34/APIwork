const url = 'http://dog.ceo/api/breeds/image/random'
const button = document.querySelector('button')
const image = document.querySelector('img')

let longitude = document.querySelector('longBox')
let latitude = document.querySelector('latBox')

button.addEventListener('click', ()=>{


fetch(url)
.then((response)=>{
    console.log('response received')
    return response.json()
})
.then((object)=>{
    console.log('response processed')
    console.log(object.message)
    image.src = object.message
})
})

//const weatherUrl = 'https://open-meteo.com/en/docs/city'
const cityButton = document.querySelector('button')

cityButton.addEventListener('click',()=>{
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latBox.value}&longitude=${longBox.value}&current=temperature_2m&temperature_unit=fahrenheit&current=weather_code,wind_speed_10m,wind_direction_10m&wind_speed_unit=mph`
fetch(weatherUrl)
.then((response)=>{
    console.log('response received')
    return response.json()
})
.then((object)=>{
    console.log('response processed')
    console.log(object)
return response.json()
})
    let temp = document.querySelector('.temp') 
 let wind = document.querySelector('.wind')  
 let script = document.querySelector(.script)

 temp.innerHTML = object.current.temperature_2m
 wind.innerHTML = object.current.wind_speed_10m
 script.innerHTML = scriptCodeObject[Object.current.weather_code]

 console.log(object)
 
 .catch((error)=>console.log(error))
})

