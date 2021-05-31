"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var nameFeedbackField = document.querySelector('.block08__form input[name="username"]').parentNode;
var seatSelectField = document.querySelector('.block08__form select[name="seatnumber"]').parentNode;
var textareaField = document.querySelector('.block08__form textarea[name="feedback-area"]').parentNode;
var btnField = document.querySelector('.block08__argeementbtn');
var inputFeedbackForm = document.querySelector('.block08__form');
var ERRORFEEDBACK_CLASS_NAME = 'st-username-error';
var FOCUSEDFEEDBACK_CLASS_NAME = "st-username-focused";
var FOCUSEDLABELFEEDBACK_CLASS_NAME = "st-usernamelabel-focused";
var ERRORMSGFEEDBACK_CLASS_NAME = "st-username-error-msg";

function initializeFormField(field, formElem) {
  var input = field.getElementsByTagName(formElem)[0];
  var label = field.getElementsByTagName('label')[0];
  var error = field.getElementsByTagName('p')[0];
  input.value = "";
  label.classList.remove(FOCUSEDLABELFEEDBACK_CLASS_NAME);
  input.classList.remove(ERRORFEEDBACK_CLASS_NAME);
  input.classList.remove(FOCUSEDFEEDBACK_CLASS_NAME);
  error.classList.remove(ERRORMSGFEEDBACK_CLASS_NAME);

  input.onfocus = function () {
    input.classList.add(FOCUSEDFEEDBACK_CLASS_NAME);
    label.classList.add(FOCUSEDLABELFEEDBACK_CLASS_NAME);
    error.classList.remove(ERRORMSGFEEDBACK_CLASS_NAME);
    input.classList.remove(ERRORFEEDBACK_CLASS_NAME);
  };

  input.onblur = function () {
    if (!input.value) {
      input.classList.remove(FOCUSEDFEEDBACK_CLASS_NAME);
      label.classList.remove(FOCUSEDLABELFEEDBACK_CLASS_NAME); 
    }
  };

  return {
    getValue: function getValue() {
      return input.value;
    },
    getAutofocus: function getAutofocus() {
      input.focus();
    },
    addError: function addError(errorText) {
      input.classList.add(ERRORFEEDBACK_CLASS_NAME);
      error.classList.add(ERRORMSGFEEDBACK_CLASS_NAME);
      error.innerHTML = errorText;
    }
  };
}

var nameFeedbackFieldUtils = initializeFormField(nameFeedbackField, 'input');
var seatSelectFieldUtils = initializeFormField(seatSelectField, 'select');
var textareaFieldUtils = initializeFormField(textareaField, 'textarea');

var HadleFeedbackSubmit = function HadleFeedbackSubmit(event) {
  event.preventDefault();
  var nameValue = nameFeedbackFieldUtils.getValue();
  var seatValue = seatSelectFieldUtils.getValue();
  var textareaValue = textareaFieldUtils.getValue();

  if (!nameValue) {
    nameFeedbackFieldUtils.addError('ну напиши ты свое имя!');
    return;
  }

  if (!seatValue) {
    seatSelectFieldUtils.addError('давай вспоминай где сидел');
    return;
  }

  if (!textareaValue) {
    textareaFieldUtils.addError('хоть скобочку то напиши');
    return;
  }

  var data = {
    name: nameValue,
    seat: seatValue,
    text: textareaValue
  };
  var url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
  url.search = new URLSearchParams(data).toString();

  var response = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var resp;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              btnField.innerHTML = 'Отлично! Запрос направлен!';
              _context.next = 3;
              return fetch(url.toString());

            case 3:
              resp = _context.sent;
              resp.status === 200 ? btnField.innerHTML = 'Ответ получен!' : btnField.innerHTML = 'Что то пошло не так';
              setTimeout(function () {
                btnField.innerHTML = 'послать';
              }, 2000);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function response() {
      return _ref.apply(this, arguments);
    };
  }();

  response();
};

inputFeedbackForm.addEventListener('submit', HadleFeedbackSubmit);