document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        let form = document.forms['helYou'];
        let name = form['name'].value.trim();
        let message = form['message'].value.trim();
        let phone = form['phone'].value.trim();
        let email = form['email'].value.trim();

        resetErrorMessages();

        let isValid = validateName(name) && validateMessage(message) && validatePhone(phone) && validateEmail(email);


        if (isValid) {
            console.log({
                Name: name,
                Message: message,
                Phone: phone,
                Email: email
            });
        }
    });
});

function resetErrorMessages() {
    document.getElementById('nameError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('emailError').textContent = '';
}

function validateName(name) {
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        return false;
    }
    return true;
}

function validateMessage(message) {
    if (message.length < 5) {
        document.getElementById('messageError').textContent = 'Message must be at least 5 characters.';
        return false;
    }
    return true;
}

function validatePhone(phone) {
    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone number must start with +380 and contain 12 digits.';
        return false;
    }
    return true;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        return false;
    }
    return true;
}
