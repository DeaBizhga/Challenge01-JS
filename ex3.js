function generateTable(nrRows, nrColumns) {
    // Nisim krijiomin e tabeles
    const table = document.createElement('table');

    // Krijojme kokene  tabeles
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    for (let j = 0; j < nrColumns; j++) {
        const th = document.createElement('th');
        th.textContent = 'Header ' + (j + 1);
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Krijojme pjesen e trupit te tabeles qe shfaq outputin rows dhe cols
    const tbody = document.createElement('tbody');
    for (let i = 0; i < nrRows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < nrColumns; j++) {
            const cell = document.createElement('td');
            cell.textContent = 'Row ' + (i + 1) + ', Col ' + (j + 1);
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);

    // Shtojme tabelen e krijuar brenda body ne html
    document.body.appendChild(table);
}

// Kthejm inputin nga string ne intiger
const nrRows = parseInt(prompt('Enter the number of rows:'));
const nrColumns = parseInt(prompt('Enter the number of columns:'));

// Gjenerojm tabelen duke thirrur funksonin e fillimit
generateTable(nrRows, nrColumns);
