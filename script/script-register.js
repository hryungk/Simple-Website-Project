const data = 'AL AK AZ AR CA CO CT DE FL GA HI ID IL IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY';
const states = data.split(/\s+/);
let dropdown = document.getElementById('dropdown');
for (let state of states) {
    let li = document.createElement('option');
    li.innerHTML = state;
    li.value = state;
    dropdown.appendChild(li);
}