const words = ['EXPERIENCE IS EVERYTHING.', 'EXPERT DIGITAL AGENCY.', 'START YOUR BUSINESS.']
const colors = ['red', 'green', 'blue']


let wordTurn = 0
let charTurn = 0

let output = document.querySelector('#outputText')

printWord()

function printWord(){
    if (words[wordTurn].length > charTurn){
        
        output.innerText += words[wordTurn].charAt(charTurn)
        charTurn += 1

        setTimeout(printWord, 100)
    } else {
        setTimeout(deleteWord, 50)
    }
}


function deleteWord(){
    if (charTurn >= 0){
        
        let outText = words[wordTurn].substring(0, charTurn)
        charTurn -= 1
        output.innerText = outText

        setTimeout(deleteWord, 50)
    } else {
        wordTurn += 1
        
        if (wordTurn >= words.length) {
            wordTurn = 0
        }

        // output.style.color = colors[wordTurn]

        setTimeout(printWord, 100)
    }
}



// let str = 'hello'


// console.log(str.substr(0, 5))
// console.log(str.substr(0, 4))
// console.log(str.substr(0, 3))
// console.log(str.substr(0, 2))
// console.log(str.substr(0, 1))