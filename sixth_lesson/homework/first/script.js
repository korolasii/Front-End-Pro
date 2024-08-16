function removeChars(str = "", charsToRemove = []) {
    let newStr = str.split('').filter(char => !charsToRemove.includes(char)).join('');

    return newStr;
}

let inputString = prompt('Enter the string: ');
let charsToRemove = prompt('Enter characters to remove, separated by commas: ').split(',').map(item => item.trim());

let result = removeChars(inputString, charsToRemove);

console.log(result);