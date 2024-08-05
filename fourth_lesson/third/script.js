
let userYearOfBirth = prompt("Your year of birth: "),
currentYear = new Date().getFullYear(),
userAge = currentYear - userYearOfBirth,
userCity = prompt("Your name of city: "),
userFavoriteSport = prompt("Your favorite sport: ");

if (userYearOfBirth !== null && userYearOfBirth.trim() !== "") {
    alert(`Your age: ${userAge}`);
}

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

