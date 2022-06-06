/* const button = document.getElementById('openModal')
const body = document.querySelector('body')

// remove invisible

const escap = button.nextElementSibling

function rinv() {
    escap.classList.toggle('invisible')
}

button.onclick = rinv

escap.onclick = rinv

*/

//solução ideal
const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function() {
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'
    if (isEscKey) {
        modalWrapper.classList.add('invisible')
    }
})

