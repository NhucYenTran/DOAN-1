function addRow(){
    let result__table = document.querySelector('.result__table')
    let tbody = result__table.querySelector('tbody');
    
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
addRow()


// function checkWidth(){
//     const widthTable = document.querySelector('.result__table')

//     if (window.innerWidth < 800 ){
//         widthTable.computedStyleMap.ov
//     }
// }
