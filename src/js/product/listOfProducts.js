'use strict'
import {getHistory, getItem} from "../localStorage.js";

updateList();

export function updateList(){
    clearList();

    let history = getHistory();
    if(!history) return;

    let products = history.map(key => getItem(key));
    fillList(products);
}

function clearList(){

    document.querySelector('.list-of-products tbody').innerHTML = '';
}

function fillList(data){
    let productElements  = data.map(product => createListElement(Object.values(product)))
    document.querySelector('.list-of-products tbody').append(...productElements);
}

function createListElement(values){
    let tr = document.createElement('tr');
    for (let value of values){
        let td = document.createElement('td');
        td.innerText = value;
        tr.append(td);
    }
    return tr;
}

document.querySelector('.list-of-products thead').addEventListener('click', (e)=>{
    e.stopPropagation();
    if (e.target.tagName !== 'TH') return;
    let th = e.target
    sortList(th.cellIndex);
})

function sortList(headerCell){
    let table = document.querySelector('.list-of-products');
    let sortedRows  =  Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => {
            return rowA.cells[headerCell].innerHTML > rowB.cells[headerCell].innerHTML ? 1 : -1
        })
    table.tBodies[0].append(...sortedRows)
}


let deleteSelected = document.getElementById('deleteSelected');
document.querySelector('.list-of-products tbody').addEventListener('click', (e)=>{
    for (let item of e.currentTarget.children){
        item.id = '';
    }
    if (!e.target.closest('tr')) return;

    e.stopPropagation();
    e.target.parentNode.id = 'selected';
    deleteSelected.style.display = 'block';
})

window.addEventListener('click', (e)=>{
    let tableBody = document.querySelector('.list-of-products tbody');
    for (let item of tableBody.children){
        item.id = '';
    }
    deleteSelected.style.display = 'none';
})
