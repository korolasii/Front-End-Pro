function createMultiplicationTable(size) {
    const table = document.getElementById('multiplicationTable');
    
    let headerRow = '<tr><th> </th>';

    for (let i = 1; i <= size; i++) {
        headerRow += `<th>${i}</th>`;
    }

    headerRow += '</tr>';
    table.innerHTML += headerRow;

    for (let i = 1; i <= size; i++) {
        let row = `<tr><th>${i}</th>`;
        for (let j = 1; j <= size; j++) {
            row += `<td>${i * j}</td>`;
        }
        row += '</tr>';
        table.innerHTML += row;
    }
}

createMultiplicationTable(10);
