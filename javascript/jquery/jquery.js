document.querySelector('.h1js').innerHTML = 'Hello JS DOM'
document.querySelector('.h1js').style.color = 'red'

$('.h1jq').html('Hello JQ DOM').css('color', 'orange')


let pList = document.querySelectorAll('.pjs')
for (let item of pList) {
    item.innerHTML = 'Hello JS DOM Paragraph'
    item.style.color = 'red'
}


$('.pjq').html('Hello JQ DOm Paragraph').css('color', 'orange')