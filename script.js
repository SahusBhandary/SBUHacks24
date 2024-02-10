let index = 0;
let text = ["", "I", "'", "m", " ", " P", "r"]

helloText = document.querySelector("#hello");
startButton = document.querySelector("#startButton");


function loadAnimation() {
    helloText.innerText +=  text[index];
    index++;
}

startButton.addEventlistener("click", loadAnimation());