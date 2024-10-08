let birthdate = moment('2008-07-08');
console.log(birthdate.format('DD.MM.YYYY'));

function checkAndFormatDate() {
    const dateInput = document.getElementById('birthdate').value;
    const regex = /^\d{2}\.\d{2}\.\d{4}$/;

    if (!regex.test(dateInput)) {
        return 'Неверный формат даты. Введите дату в формате DD.MM.YYYY';
    }

    const formattedDate = moment(dateInput, 'DD.MM.YYYY').format('MMMM Do, YYYY');
    return `${formattedDate}`;
}

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('inputGroup-sizing-default')
alertTrigger.addEventListener('click', () => { 
    if(alertPlaceholder.childElementCount != 0){
        alertPlaceholder.innerHTML = ' ';
    }
    if (alertPlaceholder){
        appendAlert(checkAndFormatDate(), 'success')
    }
})
