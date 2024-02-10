const startButton = document.querySelector('#startButton');
const codeSection = document.querySelector('#appearingCode');
const box = document.querySelector('#box');

const array = [
    "Initializing C:/Unauthorized_User/Secret/PROJECTNAME.exe", 
    "Access Denied.",
    "Attempting to bypass firewall...",
    "Firewall is impenetrable. Mission failed. ",
    "Firewall is impenetrable. Mission failed. ",
    "Firewall is impenetrable. Mission failed. ",
    "Mission success. ",
    "Executing program PROJECTNAME.exe",
    "API executed successfully Starting PROJECTNAME.exe"

];

let intervalId;
let iterations = 0;


function writeCode() {
    intervalId = setInterval(() => {
        codeSection.innerText += "\n" + array[iterations] ;
        iterations++;

        if (iterations >= 9) {
            clearInterval(intervalId);
            box.innerText = "Add short description of PROJECT as well as a textbox for input tmr";
        }
    
    }, randomDelayMaker());

    startButton.removeEventListener('click', writeCode);
    
}

function randomDelayMaker() {
    let delay = 800;
    return delay;
}

startButton.addEventListener('click', writeCode);
