'use strict'
import {updateList} from "./product/listOfProducts.js";
import {updateCaloriesInfo} from "./calories/calories.js";
import {updateDiagram} from "./calories/diagram/diagram.js";

export function refresh(){
    updateList();
    updateCaloriesInfo();
    updateDiagram();
}