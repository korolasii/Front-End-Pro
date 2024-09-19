function f(arr, nameFunc){
    let objectFiltration = {};
    for(let element of arr){
        let numberCalc = nameFunc(element);
        if (objectFiltration[`${numberCalc}`]) {
            objectFiltration[`${numberCalc}`].push(element);
        } else {
            objectFiltration[`${numberCalc}`] = [element];
        }
    }

    return objectFiltration;
}


console.log(f([4.1, 5.2, 5.3, 6.7], Math.round))