const startButton = document.querySelector('#startButton');
const codeSection = document.querySelector('#appearingCode');
const input = document.querySelector('#textBox');
const submitButton = document.querySelector('#submitButton');
const chat = document.querySelector('#chat');
const box = document.querySelector('#box');
const hero = document.querySelector('#hero')
const array = [
    "Initializing C:/SBUHacker_User/TopSecret/PROJECTNAME.exe", 
    "Access Denied.",
    "Attempting to bypass firewall...",
    "Firewall is impenetrable.",
    "Mission failed. ",
    "Attempting to bypass firewall again...",
    "Firewall is impenetrable.",
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

        if (iterations >= 10) {
            clearInterval(intervalId);
            document.getElementById("desc").style.display = "block";
            document.getElementById("box").style.display = "block";
            
        }
    
    }, randomDelayMaker());

    startButton.removeEventListener('click', writeCode);
    
}

function randomDelayMaker() {
    let delay = 80;
    return delay;
}

let counter = 0;
function writeChat() {
    if (counter == 0 && input.value != "SBUHACKS") {

    }
    else if (counter == 0 && input.value == "SBUHACKS") {
        counter = 1;
        const welcome = document.createElement('p');
        welcome.style.textAlign = "left";
        welcome.style.paddingLeft = "40px";
        welcome.innerText = "\nHi. I am Project Name Chat\n\n";
        chat.appendChild(welcome);
    
    }
    else {
        counter = 1;
        const newText = document.createElement('p');
        newText.innerText = "\n";
        newText.innerText += input.value;
        newText.innerText += "\n\n";
        chat.appendChild(newText);
        const newBotText = document.createElement('p');
        newBotText.innerText = "Response\n\n";
        newBotText.style.textAlign = "left";
        newBotText.style.paddingLeft = "40px";
        chat.append(newBotText);

        
    }
}

startButton.addEventListener('click', writeCode);
submitButton.addEventListener('click', writeChat);
