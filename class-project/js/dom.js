// document.getElementById('myText').innerText = 'Hello JS DOM <a href= "https://google.com">Google</a>'
// document.getElementById('myText').innerHTML = 'Hello JS DOM <a href= "https://google.com">Google</a>'


// document.getElementById 1
// document.getElementsByClassName [] 1 .... n 
// document.getElementsByTagName [] 1 .... n
// document.getElementsByName [] 1 .... n


let idElem = document.getElementById('myText')
let classElems = document.getElementsByClassName('template-item')

console.log(idElem)
console.log(classElems)

let classElemQ = document.querySelector('.wrap')
let classElemsQ = document.querySelectorAll('.wrap')

let elemWithTagClass = document.querySelector('.home-content h3')

console.log(classElemQ)
console.log(classElemsQ)
console.log(elemWithTagClass)