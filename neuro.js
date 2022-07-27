export {createGraphic};

function getMaxValueFromArray(array) {
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}

function createGraphic(values) {
    const wrapper = document.createElement("div");
    const max = getMaxValueFromArray(values);

    wrapper.classList.add("graph");

    values.forEach(val => {
        const graphColumn = document.createElement("div");
        let width = Math.floor((val * 100) / max);
        let color = "red";

        if (width < 40) {
            color = "green";
        } else if (width < 75) {
            color = "yellow";
        }
        
        graphColumn.classList.add("graph-column");
        graphColumn.setAttribute("style", `background-color: ${color}; height: 20px; margin-top: 4px; width: ${width}%;`);

        wrapper.prepend(graphColumn);
    });

    return wrapper
}
