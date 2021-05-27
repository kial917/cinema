"use strict";

var openBtn = document.getElementById('btn-gift-open');
var popup = document.getElementById('gift-popup');
var closeBtn = document.getElementById('gift-popup-close');
var nameField = document.querySelector('#gift-popup input[name="usernamegift"]').parentNode;
var emailField = document.querySelector('#gift-popup input[name="emailgift"]').parentNode;
var giftSelectField = document.querySelector('#gift-popup  select[name="selectgift"]').parentNode;
var inputGiftForm = document.querySelector('#inputs-giftform');

function popupToggle() {
  popup.classList.toggle('hidden');
}

;
var ERROR_CLASS_NAME = "st-usernamegift-error";
var FOCUSED_CLASS_NAME = "st-usernamegift-focused";

function initializeField(field) {
  console.log(field);
  var input = field.getElementsByTagName('input')[0];
  var select = field.getElementsByTagName('select')[0];
  var fieldError = field.querySelector('.st-usernamegift-error-msg'); // field.classList.remove(ERROR_CLASS_NAME);
  // field.classList.remove(FOCUSED_CLASS_NAME);
  // // fieldError.innerText = '';
  // input.onfocus = () => {
  //     field.classList.add(FOCUSED_CLASS_NAME);
  // };
  // input.onblur = () => {
  //     if (!input.value) {
  //         field.classList.remove(FOCUSED_CLASS_NAME);
  // //     }
  // };

  return {
    getValue: function getValue() {
      console.log(input);
      return input.value;
    },
    getSelectValue: function getSelectValue() {
      console.log(select);
      return select.value;
    }
  };
}

;
var nameFieldUtils = initializeField(nameField);
var emailFieldUtils = initializeField(emailField);
var selectgiftFieldUtils = initializeField(giftSelectField);
openBtn.onclick = popupToggle;
closeBtn.onclick = popupToggle;

var HadleSubmit = function HadleSubmit(event) {
  event.preventDefault();
  var data = {
    name: nameFieldUtils.getValue(),
    email: emailFieldUtils.getValue(),
    gift: selectgiftFieldUtils.getSelectValue()
  };
  var url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
  url.search = new URLSearchParams(data).toString();
  fetch(url.toString());
};

inputGiftForm.addEventListener('submit', HadleSubmit);