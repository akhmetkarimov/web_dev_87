const images = [
    'https://i.pinimg.com/originals/a3/8e/66/a38e66e215b90a6edc273189798777ad.jpg',
    'https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?size=626&ext=jpg&ga=GA1.2.1207464890.1610236800',
    'https://wow.zamimg.com/uploads/blog/images/20516-afterlives-ardenweald-4k-desktop-wallpapers.jpg',
    'https://wow.zamimg.com/uploads/screenshots/normal/980483.jpg'
]

let slideIndex = 1
let output = document.querySelector('.slide-image')

slideShow(slideIndex)

function nextSlide(n) {
    slideIndex += n
    slideShow(slideIndex)
}


function slideShow(index){
    if (index > images.length) {
        index = 1
        slideIndex = 1
    }

    if (index <= 0) {
        index = images.length
        slideIndex = images.length
    }

    output.src = images[index - 1]
}
