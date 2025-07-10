"use strict";
/// <reference path="./crud.d.ts" />
exports.__esModule = true;
var CRUD = require("./crud.js");
var row = {
    firstName: "Guillaume",
    lastName: "Salva"
};
var newRowID = CRUD.insertRow(row);
var updateRow = {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23
};
CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);
