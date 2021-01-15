let modal = document.querySelector('.modal-window')
let output = document.querySelector('.outputImg')
let images = document.querySelectorAll('.images')

for (let item of images) {
    item.addEventListener('click', function() {
        toggleModal('open')
        output.src = this.src
    })
}

function toggleModal(action) {
    if (action === 'open') {
        modal.classList.add('active')
    } else {
        modal.classList.remove('active')    
    }
}