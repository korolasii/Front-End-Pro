function removeElement(array=[], items=[]){
    let newArray = array.filter(element => !items.includes(element));
    console.log(newArray);
    return newArray;
}

let array = prompt('Enter data separated by commas(1, 2, 52): ').split(", ");
let deleteItems = prompt('Enter data to delete separated by commas(1, 2, 52): ').split(", ");

console.log(removeElement(array, deleteItems))