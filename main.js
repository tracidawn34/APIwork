const url = 'http://dog.ceo/api/breeds/image/random'
const button = document.querySelector('button')

button.addEventListener('click', ()=>{


fetch(url)
.then((response)=>{
    console.log('response received')
    return response.json()
})
.then((object)=>{
    console.log('rsponse processed')
    console.log(object.message)
})
})