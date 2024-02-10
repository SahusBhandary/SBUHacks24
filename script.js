const startButton = document.querySelector('#startButton');
const codeSection = document.querySelector('#appearingCode');
const input = document.querySelector('#textBox');
const submitButton = document.querySelector('#submitButton');
const chat = document.querySelector('#chat');
const box = document.querySelector('#box');
const hero = document.querySelector('#hero');
const inputArray = [

]
const array = [
    "Initializing C:/SBUHacker_User/TopSecret/SOCIALSYNCAI.exe", 
    "Access Denied.",
    "Attempting to bypass firewall...",
    "Firewall is impenetrable.",
    "Mission failed. ",
    "Attempting to bypass firewall again...",
    "Firewall is impenetrable.",
    "Mission success. ",
    "Executing program SOCIALSYNCAI.exe",
    "API executed successfully Starting SOCIALSYNCAI.exe"
];
let intervalId;
let iterations = 0;


function writeCode() {
    intervalId = setInterval(() => {
        codeSection.innerText += "\n" + array[iterations] + "\n";
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
    if (counter == 0 && input.value != "START") {

    }
    else if (counter == 0 && input.value == "START") {
        counter++;
        const welcome = document.createElement('p');
        const botHeader1 = document.createElement('p');
        botHeader1.innerText = "\nBot";
        botHeader1.style.alignItems = "center";
        botHeader1.style.backgroundColor = "grey";
        botHeader1.style.color= "#333333";
        botHeader1.style.textAlign = "left";
        botHeader1.style.marginRight = "40px";
        botHeader1.style.marginLeft = "40px";
        botHeader1.style.fontWeight = "800";
        botHeader1.style.textDecoration = "underline";
        botHeader1.style.fontSize = "22px";
        welcome.style.textAlign = "left";
        welcome.style.paddingLeft = "40px";
        welcome.innerText = "Hi. I am SocialSync AI. Enter description of ai. Where do you plan to eat?\n\n";
        chat.append(botHeader1);
        chat.appendChild(welcome);

    
    }
    else if (counter == 1){
        counter++;
        const newText = document.createElement('p');
        const user = document.createElement('p');
        user.innerText = "User";
        user.style.alignItems = "center";
        user.style.backgroundColor = "grey";
        user.style.color= "#333333";
        user.style.textAlign = "right";
        user.style.marginRight = "40px";
        user.style.marginLeft = "40px";
        user.style.fontWeight = "800";
        user.style.textDecoration = "underline";
        user.style.fontSize = "22px";
        newText.innerText += "\n";
        newText.innerText += input.value;
        newText.innerText += "\n\n";
        inputArray.push(input.value);
        newText.style.alignItems = "center";
        newText.style.backgroundColor = "grey";
        newText.style.textAlign = "right";
        newText.style.marginRight = "40px";
        newText.style.marginLeft = "40px";
    
        
        chat.append(user);
        chat.appendChild(newText);
        const newBotText = document.createElement('p');
        const botHeader = document.createElement('p');
        botHeader.innerText = "Bot";
        botHeader.style.alignItems = "center";
        botHeader.style.backgroundColor = "grey";
        botHeader.style.color= "#333333";
        botHeader.style.textAlign = "left";
        botHeader.style.marginRight = "40px";
        botHeader.style.marginLeft = "40px";
        botHeader.style.fontWeight = "800";
        botHeader.style.textDecoration = "underline";
        botHeader.style.fontSize = "22px";
        newBotText.innerText = "What time?\n\n";
        newBotText.style.backgroundColor = "grey";
        newBotText.style.alignItems = "center";
        newBotText.style.textAlign = "left";
        newBotText.style.marginLeft = "40px";
        newBotText.style.marginRight = "40px";
        
        chat.append(botHeader);
        chat.append(newBotText);
    }
    else if (counter == 2) {
        counter++;
        const newText = document.createElement('p');
        const user = document.createElement('p');
        user.innerText = "User";
        user.style.alignItems = "center";
        user.style.backgroundColor = "grey";
        user.style.color= "#333333";
        user.style.textAlign = "right";
        user.style.marginRight = "40px";
        user.style.marginLeft = "40px";
        user.style.fontWeight = "800";
        user.style.textDecoration = "underline";
        user.style.fontSize = "22px";
        newText.innerText += "\n";
        newText.innerText += input.value;
        newText.innerText += "\n\n";
        inputArray.push(input.value);
        newText.style.alignItems = "center";
        newText.style.backgroundColor = "grey";
        newText.style.textAlign = "right";
        newText.style.marginRight = "40px";
        newText.style.marginLeft = "40px";
    
        
        chat.append(user);
        chat.appendChild(newText);
        const newBotText = document.createElement('p');
        const botHeader = document.createElement('p');
        botHeader.innerText = "Bot";
        botHeader.style.alignItems = "center";
        botHeader.style.backgroundColor = "grey";
        botHeader.style.color= "#333333";
        botHeader.style.textAlign = "left";
        botHeader.style.marginRight = "40px";
        botHeader.style.marginLeft = "40px";
        botHeader.style.fontWeight = "800";
        botHeader.style.textDecoration = "underline";
        botHeader.style.fontSize = "22px";
        newBotText.innerText = "How many people?\n\n";
        newBotText.style.backgroundColor = "grey";
        newBotText.style.alignItems = "center";
        newBotText.style.textAlign = "left";
        newBotText.style.marginLeft = "40px";
        newBotText.style.marginRight = "40px";
        
        chat.append(botHeader);
        chat.append(newBotText);
    }
    else if (counter == 3) {
        counter++;
        const newText = document.createElement('p');
        const user = document.createElement('p');
        user.innerText = "User";
        user.style.alignItems = "center";
        user.style.backgroundColor = "grey";
        user.style.color= "#333333";
        user.style.textAlign = "right";
        user.style.marginRight = "40px";
        user.style.marginLeft = "40px";
        user.style.fontWeight = "800";
        user.style.textDecoration = "underline";
        user.style.fontSize = "22px";
        newText.innerText += "\n";
        newText.innerText += input.value;
        newText.innerText += "\n\n";
        inputArray.push(input.value);
        newText.style.alignItems = "center";
        newText.style.backgroundColor = "grey";
        newText.style.textAlign = "right";
        newText.style.marginRight = "40px";
        newText.style.marginLeft = "40px";
    
        
        chat.append(user);
        chat.appendChild(newText);

        const newBotText = document.createElement('p');
        const botHeader = document.createElement('p');
        botHeader.innerText = "Bot";
        botHeader.style.alignItems = "center";
        botHeader.style.backgroundColor = "grey";
        botHeader.style.color= "#333333";
        botHeader.style.textAlign = "left";
        botHeader.style.marginRight = "40px";
        botHeader.style.marginLeft = "40px";
        botHeader.style.fontWeight = "800";
        botHeader.style.textDecoration = "underline";
        botHeader.style.fontSize = "22px";
        newBotText.innerText = "Thanks for your input! Generating results. Please wait.\n\n";
        newBotText.style.backgroundColor = "grey";
        newBotText.style.alignItems = "center";
        newBotText.style.textAlign = "left";
        newBotText.style.marginLeft = "40px";
        newBotText.style.marginRight = "40px";
        
        chat.append(botHeader);
        chat.append(newBotText);
    }
    else {
        return;
    }
    
}

startButton.addEventListener('click', writeCode);
submitButton.addEventListener('click', writeChat);

