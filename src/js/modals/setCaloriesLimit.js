'use strict'
import {initLocalStorage} from "../localStorage.js";
import {showContent} from "../header/header.js";
import {setCaloriesLimit} from "../calories/calories.js";
import {refresh} from "../refreshAllPagesData.js";


let caloriesLimit = document.getElementById('caloriesLimit');

document.getElementById('setCaloriesLimit').addEventListener('click', (e)=>{
    e.preventDefault();

    if (isNaN(caloriesLimit.value) || !caloriesLimit.value) return;
    if (caloriesLimit.value.length > 10) return;

    document.querySelector('.setCaloriesLimit').style.display = 'none';

    initLocalStorage();
    setCaloriesLimit(Math.round(+caloriesLimit.value*100)/100);
    refresh();
    showContent();

    caloriesLimit.value = '';
})

document.querySelector('.setCaloriesLimit .close').addEventListener('click',(e)=>{
    document.querySelector('.setCaloriesLimit').style.display = 'none';
})

