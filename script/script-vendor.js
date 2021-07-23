const tableData = 'Dong Ting Chun, Hunan;Share Tea, Taiwanese; Dominos Pizza, American';
let vendors = tableData.split(/\s*;\s*/);
for (let i in vendors) {
    const vendor = vendors[i];            
    if (vendor != '') {
        const rowData = vendor.split(/\s*,\s*/);
        let tbody = document.querySelector('#tbody');
        // Deep clone the targeted row
        let newRow = tbody.rows[0].cloneNode(true);
        for (let j in rowData) {
            newRow.cells[j].innerHTML = rowData[j];
        }
        tbody.appendChild(newRow);
    }
}