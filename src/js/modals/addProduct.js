'use strict'
import {storeItem} from "../localStorage.js";
import {refresh} from "../refreshAllPagesData.js";

function getProductFormData(){
    return{
        name: document.getElementById('productName').value,
        calories: document.getElementById('calories').value
    }
}

let addProduct = document.getElementById('submit');

addProduct.addEventListener('click', (e)=>{
    e.preventDefault();
    let productData = getProductFormData();

    if(isNaN(productData.calories)) return;
    if(!productData.calories || !productData.name) return;
    if(productData.calories.length > 40 || productData.name.length > 40) return;

    closeAddProductForm();
    storeItem(`${productData.name}_${productData.calories}`, productData);
    refresh();
})

document.querySelector('#new-product-form .close').addEventListener('click', (e)=>{
    closeAddProductForm();
})


function cleanProductFormData(){
    document.getElementById('productName').value = '';
    document.getElementById('calories').value = '';
}

function closeAddProductForm(){
    cleanProductFormData();
    document.getElementById('new-product-form').style.display = 'none';
}