'use strict'


export function initLocalStorage(){
    deleteAll();
    _setHistory([]);
}

export function getCaloriesLimit_ls(){
    return JSON.parse(localStorage.getItem('caloriesLimit'));
}

export function getCaloriesEaten_ls(){
    let history = getHistory();
    let caloriesEaten = 0;
    for (let item of history){
        caloriesEaten += +getItem(item).calories;
    }
    return caloriesEaten;
}
export function setCaloriesLimit_ls(calories = 0){

    localStorage.setItem('caloriesLimit', JSON.stringify(Math.round(calories*100)/100))
}


export function getHistory(){
    return JSON.parse(localStorage.getItem('history'));
}

function _setHistory(history){
    localStorage.setItem('history', JSON.stringify(history))
}

export function storeItem(key, value){
    if(!key || typeof key !== "string" || !value) return;

    localStorage.setItem(key, JSON.stringify(value));

    let history = getHistory();
    history.push(key);
    _setHistory(history);

    console.log('Item has been stored');
}

export function removeItem(key){
    if(!key || typeof key !== "string") return;

    localStorage.removeItem(key);

    let history = getHistory();
    history = history.filter(item => item !== key);
    _setHistory(history);
}

export function getItem(key){
    return JSON.parse(localStorage.getItem(key));
}

export function deleteAll(){
    let history = getHistory();
    if(!history) return;

    for (let item of history){
        removeItem(item)
    }
}
