"use strict";

var openBtn = document.getElementById('btn-gift-open');
var popup = document.getElementById('gift-popup');
var closeBtn = document.getElementById('gift-popup-close');
var nameField = document.querySelector('#gift-popup input[name="usernamegift"]').parentNode;
var emailField = document.querySelector('#gift-popup input[name="emailgift"]').parentNode;
var inputGiftForm = document.querySelector('#inputs-giftform');

function popupToggle() {
  popup.classList.toggle('hidden');
}

;
var ERROR_CLASS_NAME = "st-usernamegift-error";
var FOCUSED_CLASS_NAME = "st-usernamegift-focused";

function initializeField(field) {
  var input = field.getElementsByTagName('input')[0];
  var fieldError = field.querySelector('.st-usernamegift-error-msg');
  input.value = '1';
  field.classList.remove(ERROR_CLASS_NAME);
  field.classList.remove(FOCUSED_CLASS_NAME);
  fieldError.innerText = '';

  input.onfocus = function () {
    field.classList.add(FOCUSED_CLASS_NAME);
  };

  input.onblur = function () {
    if (!input.value) {
      field.classList.remove(FOCUSED_CLASS_NAME);
    }
  };

  return {
    getValue: function getValue() {
      return input.value;
    }
  };
}

;
var nameFieldUtils = initializeField(nameField);
var emailFieldUtils = initializeField(emailField);
openBtn.onclick = popupToggle;
closeBtn.onclick = popupToggle;

var HadleSubmit = function HadleSubmit(event) {
  event.preventDefault();
  var data = {
    name: nameFieldUtils.getValue(),
    email: emailFieldUtils.getValue()
  };
  var url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
  url.search = new URLSearchParams(data).toString();
  fetch(url.toString());
};

inputGiftForm.addEventListener('submit', HadleSubmit);