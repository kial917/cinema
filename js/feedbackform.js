const nameFeedbackField = document.querySelector('.block08__form input[name="username"]').parentNode;
const seatSelectField = document.querySelector('.block08__form select[name="seatnumber"]').parentNode;
const textareaField = document.querySelector('.block08__form textarea[name="feedback-area"]').parentNode;
const btnField = document.querySelector('.block08__argeementbtn');

const inputFeedbackForm = document.querySelector('.block08__form');

const ERRORFEEDBACK_CLASS_NAME = 'st-username-error';
const FOCUSEDFEEDBACK_CLASS_NAME = "st-username-focused";
const FOCUSEDLABELFEEDBACK_CLASS_NAME = "st-usernamelabel-focused";
const ERRORMSGFEEDBACK_CLASS_NAME = "st-username-error-msg";

function initializeFormField(field, formElem) {
    const input = field.getElementsByTagName(formElem)[0];
    const label = field.getElementsByTagName('label')[0];
    const error = field.getElementsByTagName('p')[0];
    input.value = "";

    label.classList.remove(FOCUSEDLABELFEEDBACK_CLASS_NAME);
    input.classList.remove(ERRORFEEDBACK_CLASS_NAME);
    input.classList.remove(FOCUSEDFEEDBACK_CLASS_NAME);
    error.classList.remove(ERRORMSGFEEDBACK_CLASS_NAME);



    input.onfocus = () => {
        input.classList.add(FOCUSEDFEEDBACK_CLASS_NAME);
        label.classList.add(FOCUSEDLABELFEEDBACK_CLASS_NAME);
        error.classList.remove(ERRORMSGFEEDBACK_CLASS_NAME);
        input.classList.remove(ERRORFEEDBACK_CLASS_NAME);

    };
    input.onblur = () => {
        if (!input.value) {
            input.classList.remove(FOCUSEDFEEDBACK_CLASS_NAME);
            label.classList.remove(FOCUSEDLABELFEEDBACK_CLASS_NAME);
            // input.classList.add(ERRORFEEDBACK_CLASS_NAME);
            // error.classList.add(ERRORMSGFEEDBACK_CLASS_NAME);
        }
    };
    return {
        getValue() {
            return input.value;
        },
        getAutofocus() {
            input.focus();
        },
        addError(errorText) {
            input.classList.add(ERRORFEEDBACK_CLASS_NAME);
            error.classList.add(ERRORMSGFEEDBACK_CLASS_NAME);
            error.innerHTML = errorText;
        }

    };
}

const nameFeedbackFieldUtils = initializeFormField(nameFeedbackField, 'input');
const seatSelectFieldUtils = initializeFormField(seatSelectField, 'select');
const textareaFieldUtils = initializeFormField(textareaField, 'textarea');

const HadleFeedbackSubmit = (event) => {
    event.preventDefault();
    const nameValue = nameFeedbackFieldUtils.getValue();
    const seatValue = seatSelectFieldUtils.getValue();
    const textareaValue = textareaFieldUtils.getValue();


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
    const data = {
        name: nameValue,
        seat: seatValue,
        text: textareaValue,
    }

    const url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
    url.search = new URLSearchParams(data).toString();




    let response = async () => {
        btnField.innerHTML = 'Отлично! Запрос направлен!';
        let resp = await fetch(url.toString());
        (resp.status === 200) ? btnField.innerHTML = 'Ответ получен!': btnField.innerHTML = 'Что то пошло не так';
        setTimeout(() => {
            btnField.innerHTML = 'послать'
        }, 2000);
    }
    response();
}




inputFeedbackForm.addEventListener('submit', HadleFeedbackSubmit)