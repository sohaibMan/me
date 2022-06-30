'use strict';


const modal = document.querySelector('.mymodal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-mymodal');
const btnContinueModal = document.querySelector('.continue');


const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


btnCloseModal.addEventListener('click', closeModal);
btnContinueModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
const wstosec = (min) => {return min*60 * 1000};//convert seconds to milliseconds

const form = document.querySelector(".myinput-group");
form.addEventListener("submit", function () {
closeModal();
})


window.setTimeout(openModal, wstosec(.5));///nos d9i9a o taban dak pop f site dyali 
//window.setTimeout(openModal,1);///nos d9i9a o taban dak pop f site dyali 

