document.addEventListener('DOMContentLoaded', function() {

// Get the container element
const container = document.getElementById('grid-container');

// Create a 16x16 grid of square divs
for (let i = 0; i < 256; i++) { // 16x16 = 256
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);

    square.addEventListener('click', function () {
        square.classList.toggle('hovered');
    });

    // Add a mouseover event listener to simulate drawing
    square.addEventListener('mouseover', function (event) {
        if (event.buttons === 1) { // Check if the left mouse button is pressed
            square.classList.add('hovered');
        }
    });

}



});

clearButton = document.querySelector('#clear-button');

clearButton.addEventListener('click', function () {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.classList.remove('hovered'));
});