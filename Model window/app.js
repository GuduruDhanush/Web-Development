'use strict';

// using Selectors
const btnshowModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btncloseModal = document.querySelector('.close-modal')

// opens the modal window
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// closes the model window
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// looping through the 3 buttons
for (let i = 0; i < btnshowModal.length; i++) {
    btnshowModal[i].addEventListener('click', openModal);
}

// closes the model window when we presses outside the window
btncloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Selecting keyboard events to manipulate
document.addEventListener('keydown', function (e) {

    if (e.key === "Escape") {
        closeModal();
    }
})
