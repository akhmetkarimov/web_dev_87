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

let output = document.querySelector('.image-out')
let outputText = document.querySelector('.slide-inner')
let outputDots = document.querySelector('.dots')
let dots = ''
let image = ''

for (let i = 0; i < images.length; i++) {
    dots += `<span class="dot" onclick="dotSlide(${i})"></span>`   
    image += `<img src="${images[i].image}" alt="Slide Image" class="slide-image">`   
}

outputDots.innerHTML = dots
output.innerHTML = image

slideShow(slideIndex)

function nextSlide(n) {
    slideIndex += n
    slideShow(slideIndex)
}

function slideShow(index){

    let currentImage = document.querySelectorAll('.slide-image')
    if (index > images.length) {
        index = 1
        slideIndex = 1
    }

    if (index <= 0) {
        index = images.length
        slideIndex = images.length
    }

    currentImage[index - 1].classList.add('active')
    outputText.innerHTML = images[index - 1].text

    dotSlide(index - 1)
}

function dotSlide(n) {
    let imageDots = document.querySelectorAll('.dot')
    let currentImage = document.querySelectorAll('.slide-image')

    for (let item of imageDots) {
        item.classList.remove('active')
    }

    for (let item of currentImage) {
        item.classList.remove('active')
    }

    imageDots[n].classList.add('active')
    currentImage[n].classList.add('active')

    output.src = images[n].image
}

