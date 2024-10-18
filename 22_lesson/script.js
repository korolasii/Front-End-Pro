import "./style.scss"; 

let list = document.querySelector('.list');
let content = document.querySelector('.content');
let btnAdd = document.querySelector('.btnAdd');
let nav = document.querySelector('.nav');
let urlFetch = 'https://swapi.dev/api/people';
let urlDefault = {
    'People': 'https://swapi.dev/api/people',
    'Planets': 'https://swapi.dev/api/planets',
    'Starships': 'https://swapi.dev/api/starships'
}
let listResult = []; 
addItemsFromFetch(urlFetch, list);

async function addItemsFromFetch(url, containerAdd) {
    try {
        let res = await fetch(url);
        let result = await res.json();

        let newItems = '';
        result['results'].forEach(item => {
            let name = item['name'];
            newItems += `<li class='${name}'>${name}</li>`;
        });
        addItemToListResult(result['results']);
        containerAdd.innerHTML += newItems;
        updateUrlFetch(result.next);
        addHidden()
    } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
    }
}

function addItemToListResult(items = []) {
    items.forEach(item => listResult.push(item));
}

function updateUrlFetch(newUrl) {
    urlFetch = newUrl;
}

function deleteActive() {
    nav.querySelectorAll('.active').forEach(item => {
        item.classList.remove('active');
    });
}

async function showItemDetails(item, element) {
    let detailsWindow = document.createElement('div');
    detailsWindow.classList.add('details-window');
    let details = `<h3>${item.name}</h3><button class="close-window">X</button>`;

    for (let key in item) {
        if (key !== 'name') {
            if (Array.isArray(item[key])) {
                details += `<p><strong>${key}:</strong></p><ul>`;
                for (let subItem of item[key]) {
                    let name = await getName(subItem);
                    details += `<li>${name}</li>`;
                }
                
                details += '</ul>';
            } else {
                if (key === 'homeworld' || key === 'url' ){
                    let name = await getName(item[key]);
                    details += `<p><strong>${key}:</strong> ${name}</p>`;
                }else{
                    details += `<p><strong>${key}:</strong> ${item[key]}</p>`;
                }
            }
        }
    }

    detailsWindow.innerHTML = details;
    document.body.appendChild(detailsWindow);

    let rect = element.getBoundingClientRect();
    detailsWindow.style.top = `${rect.top + window.scrollY}px`;
    detailsWindow.style.left = `${rect.left + 300}px`;
    detailsWindow.querySelector('.close-window').addEventListener('click', () => {
        detailsWindow.remove();
    });
}

async function getName(url) {
    try {
        let res = await fetch(url);
        let result = await res.json();
        return result['name'] || result['title'] || 'No name available';
    } catch (error) {
        console.error('Error fetching name:', error);
        return 'Error fetching data';
    }
}

function addHidden(){
    if (urlFetch === null){
        btnAdd.classList.add('hidden')
    }
}

btnAdd.addEventListener('click', () => {
    if (urlFetch) {
        addItemsFromFetch(urlFetch, list);
    }
});

nav.addEventListener('click', (e) => {
    if (!e.target.classList.contains('active') && Object.keys(urlDefault).includes(e.target.innerHTML)) {
        deleteActive();
        listResult = [];
        console.log()
        e.target.classList.add('active');
        list.innerHTML = '';
        let text = e.target.innerHTML;
        urlFetch = urlDefault[text];
        addItemsFromFetch(urlFetch, list);
    }

    if (btnAdd.classList['value'].split(' ')[1] === 'hidden'){
        btnAdd.classList.remove('hidden')
    }
});

list.addEventListener('click', (e) => {
    let itemCheck = e.target.textContent;
    let foundItem = listResult.find(item => item.name === itemCheck);
    
    if (foundItem) {
        showItemDetails(foundItem, e.target);
    }
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.details-window')) {
        document.querySelectorAll('.details-window').forEach(win => win.remove());
    }
});