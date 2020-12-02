// for, while, do while

// while (условие) {}
// if (условие) {}

// let num = -50

// //    20 > 1
// while (50 >= num) {
//     if (num % 2 == 0 && num > 0){
//         document.write(num + ' ')
//     }
//     // num = num + 1
//     num += 1
//     // num++
// }

// let sum = 0

// while (20 >= num) {
//     sum += num
//     num += 1
// }

// document.write(sum + " ")

// let username = ''
// let count = 0
// //     admin !== admin false
// //     asdsad !== admin true
// while (username !== 'admin') {
//     username = prompt('Enter username')
//     count++
// }

// document.write("Welcome Admin, Failed attempts ", count)

// let num = 0
// while (20 >= num) {
//     console.log(num)
//     num+=4
// }

// for(start; condition; action) {}
// console.log('-----------------')

// let count = 0
// let sum = 0
// for (let i = -20; i <= 80; i+=1) {
//     if (i % 2 !== 0 && i < 0) {
//         sum += i
//         count += 1
//     }
// }
// console.log(count, sum)

// 5! = 1 * 2 * 3 * 4 * 5 = 120


// let factorialNumber = Number(prompt('Enter number factorial'))

// let factorialResult = 1

// for (let i = 1; i <= factorialNumber; i++){
//     factorialResult *= i
// }

// console.log(factorialResult)


// do {
//     console.log('Do While')
// }  while (10 < 5)



// while (10 < 5) {
//     console.log('While')
// }

// let num = 6218345 // = 29
// let sum = 0
// let pro = 1

// while (num > 0) {
//     let temp = num % 10
//     if (temp % 2 != 0) {
//         sum += temp
//         pro *= temp
//     }
//     num = Math.floor(num / 10)
// }

// console.log(sum, pro)


// let sumFor = 0
// let proFor = 1

// // 6218345
// // 5438126

// for (let i = 6218345; i > 0; i = Math.floor(i / 10)) {
//     sumFor += i % 10
//     proFor *= i % 10
// }

// console.log(sumFor, proFor)

// 6218345
// 5438126

// let reverse = 0

// for (let i = 6218345; i > 0; i = Math.floor(i / 10)) {
//     reverse = reverse * 10 + i % 10
// }

// console.log(reverse)


// for (let i = 1; i <= 5; i++) {
//     for (let j = 0; j <= 6; j++){
//        console.log('ROW: ', i ,  "COL: ", j)
//     }
// }




// for (let i = 1; i <= 5; i++) {
//     for (let j = 0; j <= 6; j++){
//         document.write('*')
//     }
//     document.write('<br>')
// }


// let sizePyr = Number(prompt('Enter size of pyramid'))

// for (let i = 1; i <= sizePyr; i++) {
    
//     for (let k = sizePyr; k > i; k--){
//         document.write('&nbsp&nbsp')
//     }

//     for (let j = 1; j <= 2 * i - 1; j++){
//         document.write('*')
//     }
    
//     document.write('<br>')
// }

// for (let i = sizePyr; i >= 1; i--) {
    
//     for (let k = sizePyr; k > i; k--){
//         document.write('&nbsp&nbsp')
//     }

//     for (let j = 1; j <= 2 * i - 1; j++){
//         document.write('*')
//     }
    
//     document.write('<br>')
// }
