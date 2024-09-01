function addRow(class_table,class_tbody){
    let table = document.querySelector(class_table)
    let tbody = table.querySelector(class_tbody);
    
    let data = [
        0,
        'KHMT',
        '123456789',
        'Tran Van A',
        '2-2-2004',
        'Nam',
        'Nguyen Van CU,An Hoa,Ninh Kieu,Can Tho '
    ]
    
    for (let i = 1; i < 100 ; i++) {
        let newRow = tbody.insertRow();
        for (let j = 0; j < 7; j++) {
            newRow.insertCell(j).innerHTML = data[j] + i
        }
    
    }
}
addRow('table','tbody')

let search__input = document.querySelectorAll('.search-form__input');
let search__label = document.querySelectorAll('.search-form__label');

for (let i = 0; i < search__input.length; i++) {
    search__input[i].onclick = function(){
        search__label[i].style.color = '#007bff';
    }
    search__input[i].onblur = function(){
        search__label[i].style.color = '';
    }
}

console.log(search__input.length)