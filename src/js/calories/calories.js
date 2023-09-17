'use strict'
import {setCaloriesLimit_ls,getCaloriesLimit_ls, getCaloriesEaten_ls} from "../localStorage.js";


export function setCaloriesLimit(calories){
    if(!calories) return;
    setCaloriesLimit_ls(calories);
    updateCaloriesInfo();
}
export function updateCaloriesInfo(){
    updateCaloriesLimit();
    updateCaloriesEaten();
}

function updateCaloriesLimit(){
    document.getElementById('maxCalories').innerText = getCaloriesLimit_ls();
}

function updateCaloriesEaten(){
    document.getElementById('caloriesEaten').innerText = getCaloriesEaten_ls();
}