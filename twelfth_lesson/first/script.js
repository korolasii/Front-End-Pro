let userLink = ''; 

document.getElementById('setLinkButton').addEventListener('click', function() {
    const link = prompt('Please enter a valid URL:');

    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,}([\/a-zA-Z0-9#-]+)?\/?$/;

    if (link && urlPattern.test(link)) {
        if (!/^https?:\/\//i.test(link)) {
            userLink = 'http://' + link;
        } else {
            userLink = link;
        }
        alert('URL saved successfully!');
    } else {
        alert('Invalid URL entered. Please try again.');
    }
});

document.getElementById('goToLinkButton').addEventListener('click', function() {
    if (userLink) {
        window.location.href = userLink; 
    } else {
        alert('Please enter a URL first.');
    }
});
