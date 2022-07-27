import {getStatusUpdater} from "./result.js";
import {getResultUpdater} from "./result.js";

import {createGraphic} from "./neuro.js";

document.querySelector("#report-created").innerHTML = new Date().toDateString();
document.querySelector("#estimation-period").innerHTML = `${1901 + Math.floor(Math.random() * 10)} ... ${new Date().getFullYear()}`;

const setStatus = getStatusUpdater(document.querySelector("#neuro-status"));
const setResult = getResultUpdater(document.querySelector("#result-data"));

const resultDataBlock = document.querySelector("#result-data");
const datatables = document.querySelectorAll(".datatable");

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

function startNeuro(counter) {
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
                            setResult( createGraphic(dataArrayToDisplay) );
                            setStatus("Done!");
                            setTimeout(() => startNeuro(++counter));
                        }, 1500);
                    }, 10000);
                }, 5000);
            }, 5000);
        }, 3000);
    } else if (counter === datatables.length) {
        const seagullImg = document.createElement("img");
        seagullImg.setAttribute("src", "./seagull.gif");
        seagullImg.setAttribute("style", "margin: 0 auto;");
        resultDataBlock.append(seagullImg);
    }
}

startNeuro(0);
