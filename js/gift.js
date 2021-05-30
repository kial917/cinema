const openBtn = document.getElementById('btn-gift-open');
const popup = document.getElementById('gift-popup');
const closeBtn = document.getElementById('gift-popup-close');


const nameField = document.querySelector('#inputs-giftform input[name="usernamegift"]').parentNode;
const emailField = document.querySelector('#inputs-giftform input[name="emailgift"]').parentNode;
const giftSelectField = document.querySelector('#inputs-giftform select[name="selectgift"]').parentNode;
const nameInput = document.querySelector('#inputs-giftform input[name="usernamegift"]');

const inputGiftForm = document.querySelector('#inputs-giftform');

function popupToggle() {
    popup.classList.toggle('hidden');
};

const ERROR_CLASS_NAME = 'st-usernamegift-error';
const FOCUSED_CLASS_NAME = "st-usernamegift-focused";
const FOCUSEDLABEL_CLASS_NAME = "st-usernamegiftlabel-focused";
const ERRORMSG_CLASS_NAME = "st-usernamegift-error-msg";

function initializeField(field,formElem) {
    const input = field.getElementsByTagName(formElem)[0];
    const label = field.getElementsByTagName('label')[0];
    const error = field.getElementsByTagName('p')[0];
    input.value = "";

    label.classList.remove(FOCUSEDLABEL_CLASS_NAME);
    input.classList.remove(ERROR_CLASS_NAME);
    input.classList.remove(FOCUSED_CLASS_NAME);
    error.classList.remove(ERRORMSG_CLASS_NAME);



    input.onfocus = () => {
        input.classList.add(FOCUSED_CLASS_NAME);
        label.classList.add(FOCUSEDLABEL_CLASS_NAME);
        error.classList.remove(ERRORMSG_CLASS_NAME);
        input.classList.remove(ERROR_CLASS_NAME);

    };
    input.onblur = () => {
        if (!input.value) {
            input.classList.remove(FOCUSED_CLASS_NAME);
            label.classList.remove(FOCUSEDLABEL_CLASS_NAME);
            // input.classList.add(ERROR_CLASS_NAME);
            // error.classList.add(ERRORMSG_CLASS_NAME);
        }
    };
    return {
        getValue() {
            return input.value;
        },
        getAutofocus() {
            input.focus();
        },
        addError(errorText){
            input.classList.add(ERROR_CLASS_NAME);
            error.classList.add(ERRORMSG_CLASS_NAME);
            error.innerHTML=errorText;
        }

    };
}

const nameFieldUtils = initializeField(nameField,'input');
const emailFieldUtils = initializeField(emailField,'input');
const selectgiftFieldUtils = initializeField(giftSelectField,'select');

const HadleSubmit = (event) => {
    event.preventDefault();
    const nameValue=nameFieldUtils.getValue();
    const emailValue=emailFieldUtils.getValue();
    const selectValue = selectgiftFieldUtils.getValue();
    
    if(!nameValue){
        nameFieldUtils.addError('ну напиши ты свое имя!');
        return;
    }
    if(!emailValue){
        emailFieldUtils.addError('мыло, нужно мыло. куда слать то письмо?');
        return;
    }
    if(!selectValue){
        selectgiftFieldUtils.addError('мой совет...выбери автограф от Клуни');
        return;
    }
    const data = {
        name: nameValue,
        email: emailValue,
        gift: selectValue,
    }

    const url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
    url.search = new URLSearchParams(data).toString();


    fetch(url.toString());

    popupToggle();
};

inputGiftForm.addEventListener('submit', HadleSubmit);



openBtn.addEventListener('click', () => {
    popupToggle();
    nameFieldUtils.getAutofocus()
})
closeBtn.onclick = popupToggle;