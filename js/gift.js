const openBtn = document.getElementById('btn-gift-open');
const popup = document.getElementById('gift-popup');

function popupToggle(){
    popup.classList.toggle('hidden');
};

openBtn.onclick = popupToggle();