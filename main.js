let initialCounter = 0;
let number = document.getElementById('counter');


function increment() {
    let result = initialCounter += 1;
    number.textContent = result; 
}

function reset() {
    console.log('Click on Button')
    number.textContent = 0;
    initialCounter = 0;
}