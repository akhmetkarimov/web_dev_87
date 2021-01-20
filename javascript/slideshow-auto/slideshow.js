const images = [
    {
        image: 'https://i.pinimg.com/originals/a3/8e/66/a38e66e215b90a6edc273189798777ad.jpg',
        text: 'First Image Text'
    },
    {
        image: 'https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?size=626&ext=jpg&ga=GA1.2.1207464890.1610236800',
        text: 'Second Image Text'
    },
    {
        image: 'https://wow.zamimg.com/uploads/blog/images/20516-afterlives-ardenweald-4k-desktop-wallpapers.jpg',
        text: 'Third Image Text'  
    },
    {
        image: 'https://wow.zamimg.com/uploads/screenshots/normal/980483.jpg',
        text: 'Fourth Image Text'
    }
]

let slideIndex = 1

let output = document.querySelector('.slide-image')
let outputText = document.querySelector('.slide-inner')

slideShow()

function slideShow(){
    if (slideIndex > images.length) {
        slideIndex = 1
    }

    if (slideIndex <= 0) {
        slideIndex = images.length
    }

    output.src = images[slideIndex - 1].image
    outputText.innerHTML = images[slideIndex - 1].text
    slideIndex += 1

    setTimeout(slideShow, 3000)
}
