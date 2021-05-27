const nameFeedbackField = document.querySelector('.block08__form input[name="username"]').parentNode;
const seatSelectField = document.querySelector('.block08__form select[name="seatnumber"]').parentNode;
const textareaField = document.querySelector('.block08__form textarea[name="feedback-area"]').parentNode;

const inputFeedbackForm = document.querySelector('.block08__form');


function initializeFormField(field) {
    const input = field.getElementsByTagName('input')[0];
    const select = field.getElementsByTagName('select')[0];
    const textarea = field.getElementsByTagName('textarea')[0];

    return {
        getInputValue() {
            return input.value;
        },
        getSelectValue() {
            return select.value;
        },
        getTextareaValue() {
            return textarea.value;
        },

    }
};

const nameFeedbackFieldUtils = initializeFormField(nameFeedbackField);
const seatSelectFieldUtils = initializeFormField(seatSelectField);
const textareaFieldUtils = initializeFormField(textareaField);

const HadleFeedbackSubmit = (event) => {
    event.preventDefault();
    const data = {
        name: nameFeedbackFieldUtils.getInputValue(),
        seat: seatSelectFieldUtils.getSelectValue(),
        text: textareaFieldUtils.getTextareaValue(),
    }

    const url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
    url.search = new URLSearchParams(data).toString();


    fetch(url.toString());
};

inputFeedbackForm.addEventListener('submit', HadleFeedbackSubmit)