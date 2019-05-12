const container = document.querySelector('#container');
const reset = document.querySelector('#reset');
const colour = document.querySelector('#colour');
const defaultScheme = document.querySelector('#black');
const GridBoxSize = 700;

// colour.addEventListener('mouseclick', )

function createGrid(count) {
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            const box = document.createElement("div");
            box.classList.add("box");


        }
        box.width(GridBoxSize / count);
        box.height(GridBoxSize / count);
        container.appendChild(box);
    }


}

function getGridSize() {
    let gridCount = prompt("How many cells should the Grid have?", 16);
    createGrid(gridCount);

}


function getRandomColour() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

function changeColour(e) {



}