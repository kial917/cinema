const openBtn = document.getElementById('btn-gift-open');
const popup = document.getElementById('gift-popup');
const closeBtn =document.getElementById('gift-popup-close');

function popupToggle(){
    popup.classList.toggle('hidden');
};

openBtn.onclick = popupToggle;
closeBtn.onclick = popupToggle;