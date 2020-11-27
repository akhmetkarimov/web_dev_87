// if / else if / else if / ... / else

// if (условие) {
//  тело выполнения
// }

// true / false


// +, -, *, /, % - Мат операторы
// ==, >, <, >=, <=, !=, ===, !==

if (10 == 20) {
    console.log('10 == 10')
} else if (2 < 1) {
    console.log('2 > 1')
} else if (2 > 1) {
    console.log('2 > 1 Second')
} else {
    console.log('ELSE')
}

// let num1 = 80
// let num2 = 80

// if(num1 > num2) {
//     console.log(num1)
// } else if(num1 < num2) {
//     console.log(num2)
// } else if(num1 == num2) {
//     console.log("Значения равны")
// }



let vibe = true

if (vibe) {
    console.log('Mac Book Pro 2020')
} else {
    console.log('Nothing')
}

// && - AND, || - OR

// true && true | 10 == 10 && 20 > 5
// true || false | 5 > 2 || 1 > 20

if (10 == 10 && 20 < 5) {
    console.log('IF AND')
} else {
    console.log('ELSE AND')
}

if (5 < 2 || 1 > 20) {
    console.log('IF OR')
} else {
    console.log('ELSE OR')
}


// let num1 = 80
// let num2 = 30
// let num3 = 120

// let max = 0

// if (num1 > max) {
//     max = num1
// } 
// // 80 > 0 true
// // max = 80

// if (num2 > max) {
//     max = num2
// }
// // 30 > 80 false
// // max = 80

// if (num3 > max) {
//     max = num3
// }
// 120 > 80 true
// max = 120


// if (num1 > max) {
//     max = num1
// } else if (num2 > max) {
//     max = num2
// } else if (num3 > max) {
//     max = num3
// }

// if(num1 > num2 && num1 > num3) {
//     console.log(num1)
// } else if(num1 < num2 && num3 < num2) {
//     console.log(num2)
// } else if(num1 < num3 && num2 < num3) {
//     console.log(num3)
// } else {
//     console.log("Значения равны")
// }

let evenOdd = 12

if (evenOdd % 2 == 0) {
    console.log('Even')
} else {
    console.log('Odd')
}

let result = evenOdd % 2 == 0 ? 'Even Ternar' : 'Odd Ternar'

console.log(result)

let num1 = 15
let num2 = 12

let condition = num1 % num2 == 0

if (condition) {
    console.log('Div')
} else {
    console.log('Not Div', num1 % num2)
}

// let name = prompt('Enter your Name')

// console.log("Welcome", name)

// // let n1 = parseInt(prompt())
// // let n2 = parseInt(prompt())

// let n1 = Number(prompt('Enter number 1'))
// let n2 = Number(prompt('Enter number 2'))

// console.log(n1 + n2)

