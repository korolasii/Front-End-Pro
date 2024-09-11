document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        let form = document.forms['helYou'];
        let name = form['name'].value.trim();
        let message = form['message'].value.trim();
        let phone = form['phone'].value.trim();
        let email = form['email'].value.trim();

        resetErrorMessages();

        let isNameValid = validateName(name);
        let isMessageValid = validateMessage(message);
        let isPhoneValid = validatePhone(phone);
        let isEmailValid = validateEmail(email);

        if (isNameValid && isMessageValid && isPhoneValid && isEmailValid) {
            console.log({
                Name: name,
                Message: message,
                Phone: phone,
                Email: email
            });
            form.reset();
            alert("The form has been successfully submitted")
        } else {
            if (!isNameValid) form['name'].value = '';
            if (!isMessageValid) form['message'].value = '';
            if (!isPhoneValid) form['phone'].value = '';
            if (!isEmailValid) form['email'].value = '';
        }
    });
});

function resetErrorMessages() {
    let errorInputs = document.querySelectorAll('.errorInput');
    errorInputs.forEach(input => {
        input.classList.remove('errorInput');
    });
    document.getElementById('nameError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('emailError').textContent = '';
}

function validateName(name) {
    const nameField = document.forms['helYou']['name'];
    const capitalLetterRegex = /^[A-ZА-Я]/;
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        nameField.classList.add('errorInput');
        nameField.focus();
        return false;
    }
    if (!capitalLetterRegex.test(name)) {
        document.getElementById('nameError').textContent = 'Name must start with a capital letter.';
        nameField.classList.add('errorInput');
        nameField.focus();
        return false;
    }
    nameField.classList.remove('errorInput');
    return true;
}

function validateMessage(message) {
    const messageField = document.forms['helYou']['message'];
    const validMessageRegex = /^.{5,}$/;
    if (!validMessageRegex.test(message.trim())) {
        document.getElementById('messageError').textContent = 'Message must be at least 5 characters.';
        messageField.classList.add('errorInput');
        messageField.focus();
        return false;
    }
    messageField.classList.remove('errorInput');
    return true;
}

function validatePhone(phone) {
    const phoneField = document.forms['helYou']['phone'];
    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone number must start with +380 and contain 12 digits.';
        phoneField.classList.add('errorInput');
        phoneField.focus();
        return false;
    }
    phoneField.classList.remove('errorInput');
    return true;
}

function validateEmail(email) {
    const emailField = document.forms['helYou']['email'];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        emailField.classList.add('errorInput');
        emailField.focus();
        return false;
    }
    emailField.classList.remove('errorInput');
    return true;
}
