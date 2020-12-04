let arr = [12, 54, 45, 32, 55, 23243 ,2332] // 4
//         0   1   2   3   4   5

arr[2] = 99
console.log(arr[2])
console.log(arr)
console.log(arr.length)
console.log(arr['length'])
       

let sumFor = 0, sumForIn = 0, sumForOf = 0

for (let i = 0; i < arr.length; i++) {
    // if (arr[i] % 2 == 0) {
    //     console.log(arr[i])
    // }
    console.log(i, arr[i])
    sumFor += arr[i]
}
console.log('------------------------------')

for (let value of arr) {
    console.log(value)
    sumForOf += value
}

console.log('------------------------------')

for (let index in arr) {
    console.log(index, arr[index])
    sumForIn += arr[index]
}


console.log(sumFor, sumForOf, sumForOf)


arr.push(22)
arr.unshift(55)

console.log(arr)

arr.pop()
arr.shift()

console.log(arr)


// let test = [12, 44, 67, -12, 88, -54, -1]
// let positive = [], negative = []





// console.log(test)
// console.log(positive)
// console.log(negative)
// console.log('------------------------------')

// let result = arr.map(value => value * 2)

// console.log(result)

let max = arr[0], maxI = 0
let min = arr[0], minI = 0
 
// for (let value of arr) {

//     if (value > max) {
//         max = value
//     }

//     if (value < min) {
//         min = value
//     }

// }

for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] > max) {
        max = arr[i] // 23243
        maxI = i // 5
    }

    if (arr[i] < min) {
        min = arr[i] // 12
        minI = i // 0
    }

}

console.log(max, min)
console.log(maxI, minI)

let sumMinMax = 0

if (minI > maxI) {
    for (let i = maxI+1; i < minI; i++){
        sumMinMax += arr[i]
    } 
} else {
    for (let i = minI+1; i < maxI; i++){
        sumMinMax += arr[i]
    } 
}

console.log(sumMinMax)