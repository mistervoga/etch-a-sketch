const container = document.querySelector('#container');
const reset = document.querySelector('#reset');
const colour = document.querySelector('#colour');
const GridBoxSize = 700;
getGridSize();


function createGrid(count) {
    for (let i = 0; i < count; i++) {
        const row = document.createElement('div');
        container.appendChild(row);

        for (let j = 0; j < count; j++) {
            let square = document.createElement('div');
            square.setAttribute('id', 'innerSquare');
            square.classList.add('square');
            square.style.width = `${GridBoxSize / count}px`;
            square.style.height = `${GridBoxSize / count}px`;
            row.appendChild(square);
            square.addEventListener('mouseover', getRandomColour)
        }

    }


}

function getGridSize() {
    let count = prompt("How many cells should the Grid have?", 16);
    createGrid(count);
}



function getRandomColour(e) {
    e.target.style.background = "rgb(" + Math.random() * 255 + ", " + Math.random() * 255 + ", " + Math.random() * 255 + ")";


}

