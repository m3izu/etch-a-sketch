

const form = document.getElementById('form');


function sketch(element) {
    element.style.backgroundColor = "black";
}

function createdivforGrid(n) {
    const outside = document.getElementById('outside');
    
    for (let i = 0; i < n * n; i++) {
        const grid = document.createElement("div");
        grid.id = `grid ${i}`;
        outside.appendChild(grid);
        grid.style.cssText = `
        border: 1px solid black;
        padding: 2px;
        box-sizing: border-box;
        text-align: center;
        flex: 1 0 calc(100% / ${n});
        aspect-ratio: 1 / 1;
    `; 
    grid.onmouseover = function() {
        sketch(this);
    }
    }
}

form.addEventListener('submit', function(event) {
    document.getElementById('outside').textContent = ' ';
    event.preventDefault();
    const valueGrid = parseInt(document.getElementById('number').value, 10);
    if (!isNaN(valueGrid) && valueGrid > 0) {
        createdivforGrid(valueGrid);
    } else {
        alert('please enter valid number');
    }
});