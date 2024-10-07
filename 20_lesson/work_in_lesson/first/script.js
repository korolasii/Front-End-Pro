const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

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

const alertTrigger = document.getElementById('liveAlertBtn')
alertTrigger.addEventListener('click', () => { 
    if (alertPlaceholder && alertPlaceholder.childElementCount === 0){
        appendAlert('Nice, you triggered this alert message!', 'success')
    }else{
        const alertDiv = document.querySelector('.alert')
        console.log(alertDiv)
        alertDiv.classList.toggle('visually-hidden')
    }
})
