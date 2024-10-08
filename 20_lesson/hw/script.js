const appendAlert = (message, type) => {
    const wrapper = $('<div>').html([
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `  <p type="button" class="btn my-0" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                ${message}
            </p>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join(''))

    $('#liveAlertPlaceholder').append(wrapper)
    wrapper.find('p').on('click', function() {
        $('#exampleModal .modal-body').text(message)
    })
}

const alertTrigger = $('#inputGroup-sizing-lg')
if (alertTrigger.length) {
    alertTrigger.on('click', () => {
    let message = $('#todo').val()
    appendAlert(message, 'success')
    })
}


