export {startNeuro};

import {getStatusUpdater} from "./neuro.js";
import {getResultUpdater} from "./neuro.js";

import {createGraphic} from "./neuro.js";
import {getMaxValueFromArray} from "./neuro.js";

function parseDataTable(datatable) {
    const rows = Array.from(datatable.querySelectorAll("tr"));
    const rowsCount = rows.length;

    return rows
        .filter((el, i) => i !== 0 && i !== rowsCount - 1)
        .map(row => {
            const dataCells = row.querySelectorAll("td");
            return parseFloat(dataCells[dataCells.length - 1].innerText);
        });
}

function getTotalFromTable(datatable) {
    const rows = Array.from(datatable.querySelectorAll("tr"));
    const lastRowIndex = rows.length - 1;

    const dataCells = rows[lastRowIndex].querySelectorAll("td");
    return parseFloat(dataCells[dataCells.length - 1].innerText);
}

function startNeuro(counter, callback) {
    if (counter < datatables.length) {
        setTimeout(() => {
            setStatus("Preparing...");
            setTimeout(() => {
                setStatus("Parsing the table...");
                setTimeout(() => {
                    setStatus("Calculating...");
                    setTimeout(() => {
                        setStatus("Preparing results...");
                        setTimeout(() => {
                            const dataArrayToDisplay = parseDataTable(datatables[counter]);
                            const currentWidth = Math.floor(datatableTotals[counter] * 100 / getMaxValueFromArray(datatableTotals));

                            setResult( createGraphic(dataArrayToDisplay, currentWidth) );
                            setStatus("Done!");
                            setTimeout(() => startNeuro(++counter, callback));
                        }, 500);
                    }, 500);
                }, 500);
            }, 500);
        }, 300);
    } else if (counter === datatables.length) {
        callback();
    }
}

const setStatus = getStatusUpdater(document.querySelector("#neuro-status"));
const setResult = getResultUpdater(document.querySelector("#result-data"));

const resultDataBlock = document.querySelector("#result-data");
const datatables = document.querySelectorAll(".datatable");
const datatableTotals = Array.from(datatables).map(dt => getTotalFromTable(dt));
