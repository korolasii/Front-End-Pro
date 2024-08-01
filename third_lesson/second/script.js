const string1 = prompt("Введіть перший рядок:");
const string2 = prompt("Введіть другий рядок:");
const string3 = prompt("Введіть третій рядок:")

const strings = [string1, string2, string3]

strings.sort(() => Math.random() - 0.5)

console.log(`Рядки у довільному порядку: ${strings[0]}, ${strings[1]}, ${strings[2]}`);