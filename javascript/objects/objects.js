// let obj = {
//     key: 'value'
// }

// let obj = {
//     name: 'Yedil',
//     surname: 'Test surname',
//     skills: ['html', 'css', 'js']
// }

// console.log(obj)

// console.log(obj.name)
// console.log(obj.surname)

// console.log(obj['name'])
// console.log(obj['surname'])

// console.log(obj.skills)

// for (let skill of obj.skills) {
//     console.log(skill)
// }



// let workers = [
//     {
//         name: 'Name 1',
//         salary: 500
//     },
//     {
//         name: 'Name 2',
//         salary: 1000
//     },
//     {
//         name: 'Name 3',
//         salary: 1300
//     },
//     {
//         name: 'Name 4',
//         salary: 2000
//     }
// ]

// console.log(workers)

// let sum = 0

// for (let person of workers) {
//     sum += person.salary
// }

// let avg = sum / workers.length

// console.log(avg)

// for (let person of workers) {

// 	if (person.salary >= avg) {
//         console.log(person)
//     }

// }


// let testObj = {
//     str: 'Hello',
//     int: 123,
//     obj: {
//         test: 'Hello'
//     },
//     arr: [1, 2 , 34],
//     arrObj: [
//         {
//             test: 'Hello'
//         },
//         {
//             test: 'Hello 2'
//         }
//     ]
// }

// console.log(testObj)



let arr = [12, 11, 9, 29, 10]

for (let item of arr) {
    console.log(item)
}

for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length; j++) {

        if (arr[j] < arr[j + 1]) {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }

    }

}

console.log('--------------------')
for (let item of arr) {
    console.log(item)
}