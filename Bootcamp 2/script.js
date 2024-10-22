
function increment() {
    counter = counter+1;
    updateScreen();
}

function updateScreen() {
    if (counter % 10 === 0) {
        let temph3 = document.createElement9('h3');
        temph3.innerText = "Congrats on your achievement!";
        document.body.appendChild(temph3);
    }

    let h2count = document.getElementById('count.h2');
    h2count.innerText = "Current count: " + counter;
}

let incrementButton = document.getElementById('increment-button');

incrementButton.addEventListener('click', increment);

let decrementButton = document.getElementById('decrement-button');

decrementButton.addEventListener('click', function(){
    counter = counter-1;
    updateScreen();
});