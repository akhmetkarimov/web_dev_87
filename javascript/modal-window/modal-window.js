// let modal = document.querySelector('.modal-window')


// function openModal(){
//     modal.style.opacity = 1
//     modal.style.position = 'fixed'
// }

// function closeModal(){
//     modal.style.opacity = 0
//     modal.style.position = 'static'
// }

// function openModal(){
//     modal.classList.add('active')
// }

// function closeModal(){
//     modal.classList.remove('active')    
// }


// function toggleModal(action) {
//     if (action === 'open') {
//         $('.modal-window').addClass('active')
//     } else {
//         $('.modal-window').removeClass('active')
//     }
// }

$('.open-btn').click(function() {
    $('.modal-window').addClass('active')
})

$('.close-btn').click(function() {
    $('.modal-window').removeClass('active')
})