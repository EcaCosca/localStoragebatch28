// localStorage.clear()

const notLocalInput = document.getElementById('not-local-input')
const notLocalh3 = document.getElementById('not-local-h3')

notLocalInput.addEventListener("keyup", ()=>{
    notLocalh3.innerHTML = notLocalInput.value
})


const localInput = document.querySelector('#local-input')
const localh3 = document.querySelector('#local-h3')

localh3.innerHTML = localStorage.getItem("value")

localInput.addEventListener("keyup", ()=>{
    localStorage.setItem("value", localInput.value)
    localh3.innerHTML = localStorage.getItem("value")
})

console.log(localStorage)