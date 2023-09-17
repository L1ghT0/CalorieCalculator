'use strict'
import {deleteAll, getHistory, removeItem} from "../localStorage.js";
import {refresh} from "../refreshAllPagesData.js";

let addProduct = document.getElementById('addProduct');
let deleteAllProducts = document.getElementById('deleteAll');
let newDay = document.getElementById('newDay');
let continueDay = document.getElementById('continueDay');
let deleteSelected = document.getElementById('deleteSelected');
let filter = document.getElementById('filter');

if(getHistory()){
    continueDay.style.display = 'block';
    continueDay.addEventListener('click', (e)=>{
        refresh();
        showContent();
    })
}


newDay.addEventListener('click', (e)=>{
    document.querySelector('.setCaloriesLimit').style.display = 'flex';
})



addProduct.addEventListener('click', (e)=>{
    document.getElementById('new-product-form').style.display = 'flex';
})


deleteAllProducts.addEventListener('click', (e)=>{
    deleteAll();
    refresh();
})

deleteSelected.addEventListener('click', (e)=>{
    let selected = document.getElementById('selected');
    removeItem(Array.from(selected.cells).reduce((acc, value) => acc += '_' + value.innerHTML , '').slice(1));
    refresh();
})

filter.addEventListener('input', (e)=>{
    let table = document.querySelector('.list-of-products')
    let tbodyRows = Array.from(table.rows).slice(1);
    let filtered = tbodyRows.filter(tr=>tr.cells[0].innerText.match(e.target.value));

    tbodyRows.forEach(row=>row.style.display = 'none');
    filtered.forEach(row=>row.style.display = 'table-row');
})

export function showContent(){
    newDay.style.display = 'none';
    continueDay.style.display = 'none';

    filter.style.display = 'block'
    addProduct.style.display = 'block';
    deleteAllProducts.style.display = 'block';
    document.querySelector('.content').style.display = 'flex';
}