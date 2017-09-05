let color = "#000000";
let height = 1;
let width = 1;
let heightInput = document.getElementById("input_height");
let widthInput = document.getElementById("input_width");
let submitButton = document.getElementById("submitButton");
let table = document.getElementById("pixel_canvas");
let form = document.getElementById("sizePicker");


colorPicker.addEventListener("change", getColor, false);
heightInput.addEventListener("change", getHeight, false);
widthInput.addEventListener("change", getWidth, false);
form.addEventListener("submit", makeGrid, false);


function getColor() {
    color = colorPicker.value;
}

function getHeight() {
    height = heightInput.value;
}

function getWidth() {
    width = widthInput.value;
}

function makeGrid(e) {

    table.innerHTML = "";

    for (i = 0; i < height; i++) {
        let tableRow = document.createElement("tr");
        table.appendChild(tableRow);

        for (j = 0; j < width; j++) {

            let tableColumn = document.createElement("td");
            tableColumn.style.backgroundColor = "white";
            tableRow.appendChild(tableColumn);
        }
    }

    e.preventDefault();

    table.addEventListener("click", colorCell, false);

}

function colorCell(e) {

    if (e.target.style.backgroundColor === "white") {
        e.target.style.backgroundColor = color;
    } else if (e.target.style !== "white") {
        e.target.style.backgroundColor = "white";
    }

}