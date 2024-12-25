

function createdivforGrid(n) {
    const outside = document.getElementById('outside');
     
    for (let i = 0; i < n; i++) {
        const grid = document.createElement("div");
        grid.id = `grid ${i}`;
        outside.appendChild(grid);
        grid.style.cssText = `
        width: calc(100% / 16);
        box-sizing: border-box;
        border: 1px solid black;
        padding: 10px;
    `;
    }
}

createdivforGrid(256);