"use strict";

var openBtn = document.getElementById('btn-gift-open');
var popup = document.getElementById('gift-popup');
var closeBtn = document.getElementById('gift-popup-close');

function popupToggle() {
  popup.classList.toggle('hidden');
}

;
openBtn.onclick = popupToggle;
closeBtn.onclick = popupToggle;