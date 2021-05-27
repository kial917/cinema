const openBtn = document.getElementById('btn-gift-open');
const popup = document.getElementById('gift-popup');
const closeBtn = document.getElementById('gift-popup-close');
const nameField = document.querySelector('#gift-popup input[name="usernamegift"]').parentNode;
const emailField = document.querySelector('#gift-popup input[name="emailgift"]').parentNode;
const inputGiftForm = document.querySelector('#inputs-giftform');

function popupToggle() {

    popup.classList.toggle('hidden');
};

const ERROR_CLASS_NAME = "st-usernamegift-error";
const FOCUSED_CLASS_NAME = "st-usernamegift-focused";

function initializeField(field) {
    const input = field.getElementsByTagName('input')[0];
    const fieldError = field.querySelector('.st-usernamegift-error-msg');
   
    input.value = '1';
    field.classList.remove(ERROR_CLASS_NAME);
    field.classList.remove(FOCUSED_CLASS_NAME);
    fieldError.innerText = '';

    input.onfocus = () => {
        field.classList.add(FOCUSED_CLASS_NAME);
    };
    input.onblur = () => {
        if (!input.value) {
            field.classList.remove(FOCUSED_CLASS_NAME);
        }

    };
    return {
        getValue() {
            return input.value;
        }
    }
};

const nameFieldUtils = initializeField(nameField);
const emailFieldUtils = initializeField(emailField);

openBtn.onclick = popupToggle;
closeBtn.onclick = popupToggle;

const HadleSubmit = (event) => {
    event.preventDefault();
    const data = {
        name: nameFieldUtils.getValue(),
        email: emailFieldUtils.getValue(),
    }

    const url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
    url.search = new URLSearchParams(data).toString();


    fetch(url.toString());
};

inputGiftForm.addEventListener('submit', HadleSubmit)