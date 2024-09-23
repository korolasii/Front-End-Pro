let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");


addModal("<input type='text'>")


function addModal(structure){
    document.getElementById('container').appendChild(structure);
}
