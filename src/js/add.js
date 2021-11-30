var val = 0; 


function add() {
    updateDisplay(++val);
}

function resetCounter() {
    updateDisplay(--val);
}

function updateDisplay(val) {
    document.getElementById("val").innerHTML = val;
}


    
