let userYearOfBirth = prompt("Your year of birth: ");
currentYear = new Date().getFullYear(),
userAge = userYearOfBirth !== null && userYearOfBirth.trim() !== "" ? currentYear - userYearOfBirth : null,
userFavoriteSport = prompt("Your favorite sport: "),
userCity = prompt("Your name of city: ");

if (userYearOfBirth === null) {
    alert("Шкода, що Ви не захотіли ввести свою дату народження.");
} else if (userYearOfBirth.trim() !== "") {
    alert(`Your age: ${userAge}`);
}

if (userCity === null) {
    alert("Шкода, що Ви не захотіли ввести своє місто.");
} else {
    switch (userCity.toLowerCase().trim()) {
        case "київ":
            alert("Ти живеш у столиці України.");
            break;
        case "вашингтон":
            alert("Ти живеш у столиці США.");
            break;
        case "лондон":
            alert("Ти живеш у столиці Великобританії.");
            break;
        default:
            alert(`Ти живеш у місті ${userCity}.`);
            break;
    }
}

if (userFavoriteSport === null) {
    alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
} else if (sportsChampions.hasOwnProperty(userFavoriteSport.toLowerCase().trim())) {
    alert(`Круто! Хочеш стати ${sportsChampions[userFavoriteSport.toLowerCase().trim()]}?`);
}