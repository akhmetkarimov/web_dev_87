// Math.random() // Method
// test() // function


// function functionName (params) {}

// myFunction() // call function

// function myFunction(n1, n2) {
//     console.log('My Function', n1 + n2)
// }

// let n1 = 12
// let n2 = 12

// myFunction(n1, n2) // call function


// myArrowFunction = (n1, n2) => {
//     console.log('My Arrow Function', n1 + n2)
// }

// myArrowFunction(12, 12)

// function welcome(name) {
//     console.log('welcome', name)
// }

// let name = prompt('Enter your name')

// welcome(name)

// function qwerty() {
//     console.log('function call')
// }

// qwerty()


// function sum(n1, n2) {
//     return n1 + n2
// }

// let res = sum(20, 12) // 32

// console.log(res)
// console.log(sum(20, 12))

// function fillArray(length, min, max) {
//     let array = []
    
//     for (let i = 0; i < length; i++) {
//         let rand = Math.floor(Math.random() * (max - min) + min)
//         array.push(rand)
//     }

//     return array
// }


// let arr = fillArray(20, -4, 10)
// let arr1 = fillArray(10, 10, 25)
// let arr2 = fillArray(20, 10, 20)
// let arr3 = fillArray(9, 10, 20)
// let arr4 = fillArray(7, 10, 20)
// let arr5 = fillArray(10, 10, 20)


// console.log(arr)
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
// console.log(arr4)
// console.log(arr5)


// let globalVar = 20

// function testLocal() {
//     let localVar = 10 

//     console.log('in function local', localVar)
//     console.log('in function global',  globalVar)

//     globalVar = 33
// }

// console.log('before function global', globalVar)

// testLocal()

// console.log('after function global', globalVar)



// setTimeout(function, timer)


// function timeFunction() {
//     alert('Hello timer')
// }

// setTimeout(timeFunction, 2000)

// setTimeout(function(){ alert('Anon function') }, 2000)

// function testInterval(){
//     console.log('Test interval')
// }

// setInterval(testInterval, 2000)

// let count = 0

// function counter(){
//     count += 1
//     console.log(count)
// }

// let test = setInterval(counter, 1000)

// // clearInterval(test)

// setTimeout(function(){
//     clearInterval(test) 
// }, 10000)

// function testPrint(){
//     console.log('Hello')
//     testPrint()
// }

// testPrint()

// let counter = 0
// function testRecur() {
//     if (counter == 5){
//         return
//     }

//     console.log('HEllo')
    
//     counter++
    
//     testRecur()
// }

// testRecur()



function sumArray(arr) {
    let sum = 0
    for (let item of array) {
        sum += item
    }
    return sum
}

let array = [3, 5, 10, 7, 12]
let result = sumArray(array)
console.log(result)