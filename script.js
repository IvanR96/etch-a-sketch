document.addEventListener('DOMContentLoaded', function() {

   const container = document.getElementById('grid-container');

   let isDrawing = false; 

        
        function handleMouseEvents(square) {
            square.addEventListener('mouseover', function () {
                if (isDrawing) {
                    square.classList.add('hovered');
                }
            });

            square.addEventListener('mousedown', function () {
                isDrawing = true;
                square.classList.add('hovered');
            });

            square.addEventListener('mouseup', function () {
                isDrawing = false;
            });
        }

   function generateGrid(gridSize) {
      const container = document.getElementById('grid-container');
      container.innerHTML = ''; // Clear existing grid

      
      const gridColumnValue = `repeat(${gridSize}, 1fr)`;
      const gridGapValue = '1px';

      container.style.gridTemplateColumns = gridColumnValue;
      container.style.gridGap = gridGapValue;

      
      for (let i = 0; i < gridSize * gridSize; i++) {
          const square = document.createElement('div');
          square.classList.add('square');
          container.appendChild(square);

          handleMouseEvents(square);
      }
  }

  
  const clearButton = document.getElementById('clear-button');
  clearButton.addEventListener('click', function () {
      const squares = document.querySelectorAll('.square');
      squares.forEach(square => square.classList.remove('hovered'));
  });

  
  let gridSize = prompt('Enter the number of squares per side (1-100):');
  gridSize = parseInt(gridSize, 10); 

  if (!isNaN(gridSize) && gridSize >= 1 && gridSize <= 100) {
      generateGrid(gridSize);
  } else {
      alert('Please enter a valid number between 1 and 100.');
  }



});



