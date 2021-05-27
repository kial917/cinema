"use strict";

var nameFeedbackField = document.querySelector('.block08__form input[name="username"]').parentNode;
var seatSelectField = document.querySelector('.block08__form select[name="seatnumber"]').parentNode;
var textareaField = document.querySelector('.block08__form textarea[name="feedback-area"]').parentNode;
var inputFeedbackForm = document.querySelector('.block08__form');

function initializeFormField(field) {
  var input = field.getElementsByTagName('input')[0];
  var select = field.getElementsByTagName('select')[0];
  var textarea = field.getElementsByTagName('textarea')[0];
  return {
    getInputValue: function getInputValue() {
      return input.value;
    },
    getSelectValue: function getSelectValue() {
      return select.value;
    },
    getTextareaValue: function getTextareaValue() {
      return textarea.value;
    }
  };
}

;
var nameFeedbackFieldUtils = initializeFormField(nameFeedbackField);
var seatSelectFieldUtils = initializeFormField(seatSelectField);
var textareaFieldUtils = initializeFormField(textareaField);

var HadleFeedbackSubmit = function HadleFeedbackSubmit(event) {
  event.preventDefault();
  var data = {
    name: nameFeedbackFieldUtils.getInputValue(),
    seat: seatSelectFieldUtils.getSelectValue(),
    text: textareaFieldUtils.getTextareaValue()
  };
  var url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
  url.search = new URLSearchParams(data).toString();
  fetch(url.toString());
};

inputFeedbackForm.addEventListener('submit', HadleFeedbackSubmit);