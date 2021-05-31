"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var openBtn = document.getElementById('btn-gift-open');
var popup = document.getElementById('gift-popup');
var closeBtn = document.getElementById('gift-popup-close');
var nameField = document.querySelector('#inputs-giftform input[name="usernamegift"]').parentNode;
var emailField = document.querySelector('#inputs-giftform input[name="emailgift"]').parentNode;
var giftSelectField = document.querySelector('#inputs-giftform select[name="selectgift"]').parentNode;
var nameInput = document.querySelector('#inputs-giftform input[name="usernamegift"]');
var inputGiftForm = document.querySelector('#inputs-giftform');

function popupToggle() {
  popup.classList.toggle('hidden');
}

;
var ERROR_CLASS_NAME = 'st-usernamegift-error';
var FOCUSED_CLASS_NAME = "st-usernamegift-focused";
var FOCUSEDLABEL_CLASS_NAME = "st-usernamegiftlabel-focused";
var ERRORMSG_CLASS_NAME = "st-usernamegift-error-msg";

function initializeField(field, formElem) {
  var input = field.getElementsByTagName(formElem)[0];
  var label = field.getElementsByTagName('label')[0];
  var error = field.getElementsByTagName('p')[0];
  input.value = "";
  label.classList.remove(FOCUSEDLABEL_CLASS_NAME);
  input.classList.remove(ERROR_CLASS_NAME);
  input.classList.remove(FOCUSED_CLASS_NAME);
  error.classList.remove(ERRORMSG_CLASS_NAME);

  input.onfocus = function () {
    input.classList.add(FOCUSED_CLASS_NAME);
    label.classList.add(FOCUSEDLABEL_CLASS_NAME);
    error.classList.remove(ERRORMSG_CLASS_NAME);
    input.classList.remove(ERROR_CLASS_NAME);
  };

  input.onblur = function () {
    if (!input.value) {
      input.classList.remove(FOCUSED_CLASS_NAME);
      label.classList.remove(FOCUSEDLABEL_CLASS_NAME); // input.classList.add(ERROR_CLASS_NAME);
      // error.classList.add(ERRORMSG_CLASS_NAME);
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
      input.classList.add(ERROR_CLASS_NAME);
      error.classList.add(ERRORMSG_CLASS_NAME);
      error.innerHTML = errorText;
    }
  };
}

var nameFieldUtils = initializeField(nameField, 'input');
var emailFieldUtils = initializeField(emailField, 'input');
var selectgiftFieldUtils = initializeField(giftSelectField, 'select');

var HadleSubmit = function HadleSubmit(event) {
  event.preventDefault();
  var nameValue = nameFieldUtils.getValue();
  var emailValue = emailFieldUtils.getValue();
  var selectValue = selectgiftFieldUtils.getValue();

  if (!nameValue) {
    nameFieldUtils.addError('ну напиши ты свое имя!');
    return;
  }

  if (!emailValue) {
    emailFieldUtils.addError('мыло, нужно мыло. куда слать то письмо?');
    return;
  }

  if (!selectValue) {
    selectgiftFieldUtils.addError('мой совет...выбери автограф от Клуни');
    return;
  }

  var data = {
    name: nameValue,
    email: emailValue,
    gift: selectValue
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
              _context.next = 2;
              return fetch(url.toString());

            case 2:
              resp = _context.sent;

              if (resp.status === 200) {
                popupToggle();
              } else alert("Статус посылки =" + resp.status);

            case 4:
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

inputGiftForm.addEventListener('submit', HadleSubmit);
openBtn.addEventListener('click', function () {
  popupToggle();
  nameFieldUtils.getAutofocus();
});
closeBtn.onclick = popupToggle;