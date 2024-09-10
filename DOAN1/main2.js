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
// 
let nganh = document.getElementById('nganh')
let mssv = document.getElementById('mssv')
let cccd = document.getElementById('cccd')
let btn = document.querySelector('.search-form__btn')

btn.onclick = function(){
    let arrnganh = ['CNTT','KHMT','KTPM']

    console.log(nganh.value)
    let search = data.filter(element =>{
        if (mssv.value.trim() === '' && cccd.value.trim() === ''){
            return arrnganh[nganh.value] === element.nganh

        }
        else if (cccd.value.trim() === '') {
            nganh.value = ''
            return mssv.value === element.mssv
        }
        else if (mssv.value.trim() === '') {
            nganh.value = ''
            return cccd.value === element.cccd
        }
        else{
            nganh.value = ''
            return mssv.value === element.mssv && cccd.value === element.cccd

        }


    })
    addRowsToTable(search)
 
}








