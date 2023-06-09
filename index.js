const current_date = new Date();
const current_year = current_date.getFullYear();
const current_day = current_date.getDate();
const current_month = current_date.getMonth() + 1;
const enteredDay = document.getElementById('day-input');
const enteredMonth = document.getElementById('month-input');
const enteredYear = document.getElementById('year-input');
const alertElement = document.getElementById('alert');
const submit = document.getElementById('submit-btn');
const closeBtn = document.getElementById('close-btn');

function addError(element, errorString) {
    const elementId = element.getAttribute('id');
    const label_element = document.querySelector(`label[for="${elementId}"]`);
    const parent = element.parentElement;
    element.classList.add("border-light_red");
    element.classList.remove('border-light_grey');
    element.classList.add(`before:content-['hello']`);
    element.classList.add('before:text-light_red');
    label_element.classList.add('text-light_red');
    label_element.classList.remove('text-smokey_grey');
    parent.setAttribute("error", errorString);
}

function addAlert(str) {
    const alertText = document.getElementById('alert-text');
    alertElement.classList.remove('hidden');
    alertElement.classList.remove('animate-close');
    alertElement.classList.add('animate-slide-in');
    alertText.innerHTML = str;
}

function revertErrorChanges(e) {
    if (e.target.classList.contains('border-light_red')) {
        const elementId = e.target.getAttribute('id');
        const label_element = document.querySelector(`label[for="${elementId}"]`);
        const parent = e.target.parentElement;
        e.target.classList.remove("border-light_red");
        e.target.classList.add('border-light_grey');
        e.target.classList.remove(`before:content-['hello']`);
        e.target.classList.remove('before:text-light_red');
        label_element.classList.remove('text-light_red');
        label_element.classList.add('text-smokey_grey');
        parent.setAttribute("error", "");
    }
}

enteredDay.addEventListener("input", revertErrorChanges);
enteredMonth.addEventListener("input", revertErrorChanges);
enteredYear.addEventListener("input", revertErrorChanges);

closeBtn.addEventListener('click', () => {
    alertElement.classList.remove('animate-slide-in');
    alertElement.classList.add('animate-close');
})

submit.addEventListener('click', (event) => {
    event.preventDefault();
    let flag = false
    if (enteredDay.value == "") {
        addError(enteredDay, "This field is required");
        flag = true;
    }
    if (enteredMonth.value == "") {
        addError(enteredMonth, "This field is required");
        flag = true;
    }
    if (enteredYear.value == "") {
        addError(enteredYear, "This field is required");
        flag = true;
    }
    if (parseInt(enteredDay.value) > 31 || parseInt(enteredDay.value) <= 0) {
        addError(enteredDay, "Must be a valid Day");
        flag = true;
    }
    if (parseInt(enteredMonth.value) > 12 || parseInt(enteredMonth.value) <= 0) {
        addError(enteredMonth, "Must be a valid Month");
        flag = true;
    }
    if (parseInt(enteredYear.value) <= 0) {
        addError(enteredYear, "Must be a valid entry");
        flag = true;
    }
    if (!flag) {
        const enteredDate = new Date(parseInt(enteredYear.value), parseInt(enteredMonth.value), parseInt(enteredDay.value));
        let time = current_date - enteredDate;
        if (current_date - enteredDate < 0) {
            addAlert("The entered date should be before current date");
        } else {
            const days = document.getElementById('days');
            const years = document.getElementById('years');
            const months = document.getElementById('months');
            years.innerHTML = Math.floor(time / (1000 * 60 * 60 * 24 * 30 * 12)) + " ";
            time %= (1000 * 60 * 60 * 24 * 30 * 12);
            months.innerHTML = Math.floor(time / (1000 * 60 * 60 * 24 * 30)) + " ";
            time %= (1000 * 60 * 60 * 24 * 30);
            days.innerHTML = Math.floor(time / (1000 * 60 * 60 * 24)) + " ";
        }
    }
});