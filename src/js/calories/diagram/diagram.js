'use strict'
import {getCaloriesLimit_ls, getCaloriesEaten_ls} from "../../localStorage.js";

let diagramFilledPercentage = document.getElementById('diagramFilledPercentage');
let diagram = document.querySelector('.diagram');
let persentage = '';

export function updateDiagram(){
    setPercentage();
    styleDiagram();
}

function setPercentage(){
    persentage = String(Math.round(((getCaloriesEaten_ls()*100)/getCaloriesLimit_ls()*100))/100)
    diagramFilledPercentage.innerText = persentage;
}

function styleDiagram(){
    +persentage > 100
        ? diagram.style.backgroundImage = `conic-gradient(red ${persentage - 100 < 1 ? 1 : persentage - 100}%, limegreen 0)`
        :  diagram.style.backgroundImage = `conic-gradient(limegreen ${persentage < 1 && persentage > 0 ? 1 : persentage}%, white 0)`
}