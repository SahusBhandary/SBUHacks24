const startButton = document.querySelector('#startButton');
const codeSection = document.querySelector('#appearingCode');
const input = document.querySelector('#textBox');
const submitButton = document.querySelector('#submitButton');
const chat = document.querySelector('#chat');
const box = document.querySelector('#box');
const hero = document.querySelector('#hero');
let chatMessage = ``;
let aiResponse = "";
const output = {
    "location": "",
    "time": "",
    "people": ""
}
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
    
    }, DelayMaker());

    startButton.removeEventListener('click', writeCode);
    
}

function DelayMaker() {
    let delay = 300;
    return delay;
}

let counter = 0;
function writeChat() {
    if (counter == 0 && input.value != "START") {

    }
    else if (counter == 0 && input.value == "START") {
        counter++;
        chat.style.border = "2px solid white"
        const welcome = document.createElement('p');
        const botHeader1 = document.createElement('p');
        botHeader1.innerText = "\nBot";
        botHeader1.style.alignItems = "center";
        botHeader1.style.backgroundColor = "#333333";
        botHeader1.style.color= "#777777";
        botHeader1.style.textAlign = "left";
        botHeader1.style.marginRight = "40px";
        botHeader1.style.marginLeft = "40px";
        botHeader1.style.fontWeight = "800";
        botHeader1.style.textDecoration = "underline";
        botHeader1.style.fontSize = "17px";
        welcome.style.textAlign = "left";
        welcome.style.paddingLeft = "40px";
        welcome.style.fontSize = "14px";
        welcome.style.paddingTop = "12.5px"
        welcome.innerText = "Hello! I'm SocialSync AI, your advanced planning companion. Do you have a destination in mind?\n\n";
        chat.append(botHeader1);
        chat.appendChild(welcome);

    
    }
    else if (counter == 1){
        counter++;
        const newText = document.createElement('p');
        const user = document.createElement('p');
        user.innerText = "User";
        user.style.alignItems = "center";
        user.style.backgroundColor = "#333333";
        user.style.color= "#777777";
        user.style.textAlign = "right";
        user.style.marginRight = "40px";
        user.style.marginLeft = "40px";
        user.style.fontWeight = "800";
        user.style.textDecoration = "underline";
        user.style.fontSize = "17px";
        newText.innerText += "\n";
        newText.innerText += input.value;
        newText.innerText += "\n\n";
        output.location = input.value;
        newText.style.alignItems = "center";
        newText.style.backgroundColor = "#333333";
        newText.style.textAlign = "right";
        newText.style.marginRight = "40px";
        newText.style.marginLeft = "40px";
        newText.style.fontSize = "14px";
        newText.style.paddingTop = "12.5px"
    
        
        chat.append(user);
        chat.appendChild(newText);
        const newBotText = document.createElement('p');
        const botHeader = document.createElement('p');
        botHeader.innerText = "Bot";
        botHeader.style.alignItems = "center";
        botHeader.style.backgroundColor = "#333333";
        botHeader.style.color= "#777777";
        botHeader.style.textAlign = "left";
        botHeader.style.marginRight = "40px";
        botHeader.style.marginLeft = "40px";
        botHeader.style.fontWeight = "800";
        botHeader.style.textDecoration = "underline";
        botHeader.style.fontSize = "17px";
        newBotText.innerText = "When would you like to schedule it? Your input helps tailor the plan to your preferences.\n\n";
        newBotText.style.backgroundColor = "#333333";
        newBotText.style.alignItems = "center";
        newBotText.style.textAlign = "left";
        newBotText.style.marginLeft = "40px";
        newBotText.style.marginRight = "40px";
        newBotText.style.fontSize = "14px";
        newBotText.style.paddingTop = "12.5px"
        
        chat.append(botHeader);
        chat.append(newBotText);
    }
    else if (counter == 2) {
        counter++;
        const newText = document.createElement('p');
        const user = document.createElement('p');
        user.innerText = "User";
        user.style.alignItems = "center";
        user.style.backgroundColor = "#333333";
        user.style.color= "#777777";
        user.style.textAlign = "right";
        user.style.marginRight = "40px";
        user.style.marginLeft = "40px";
        user.style.fontWeight = "800";
        user.style.textDecoration = "underline";
        user.style.fontSize = "17px";
        newText.innerText += "\n";
        newText.innerText += input.value;
        newText.innerText += "\n\n";
        output.time = input.value;
        newText.style.alignItems = "center";
        newText.style.backgroundColor = "#333333";
        newText.style.textAlign = "right";
        newText.style.marginRight = "40px";
        newText.style.marginLeft = "40px";
        newText.style.fontSize = "14px";
        newText.style.paddingTop = "12.5px"
    
        
        chat.append(user);
        chat.appendChild(newText);
        const newBotText = document.createElement('p');
        const botHeader = document.createElement('p');
        botHeader.innerText = "Bot";
        botHeader.style.alignItems = "center";
        botHeader.style.backgroundColor = "#333333";
        botHeader.style.color= "#777777";
        botHeader.style.textAlign = "left";
        botHeader.style.marginRight = "40px";
        botHeader.style.marginLeft = "40px";
        botHeader.style.fontWeight = "800";
        botHeader.style.textDecoration = "underline";
        botHeader.style.fontSize = "17px";
        newBotText.innerText = "How many guests will be involved in the plan?\n\n";
        newBotText.style.backgroundColor = "#333333";
        newBotText.style.alignItems = "center";
        newBotText.style.textAlign = "left";
        newBotText.style.marginLeft = "40px";
        newBotText.style.marginRight = "40px";
        newBotText.style.fontSize = "14px";
        newBotText.style.paddingTop = "12.5px"

        chat.append(botHeader);
        chat.append(newBotText);
    }
    else if (counter == 3) {
        counter++;
        const newText = document.createElement('p');
        const user = document.createElement('p');
        user.innerText = "User";
        user.style.alignItems = "center";
        user.style.backgroundColor = "#333333";
        user.style.color= "#777777";
        user.style.textAlign = "right";
        user.style.marginRight = "40px";
        user.style.marginLeft = "40px";
        user.style.fontWeight = "800";
        user.style.textDecoration = "underline";
        user.style.fontSize = "17px";
        newText.innerText += "\n";
        newText.innerText += input.value;
        newText.innerText += "\n\n";
        output["people"] = input.value;
        console.log(output["people"]);
        console.log(output["location"]);
        console.log(output["time"]);
        newText.style.alignItems = "center";
        newText.style.backgroundColor = "#333333";
        newText.style.textAlign = "right";
        newText.style.marginRight = "40px";
        newText.style.marginLeft = "40px";
        newText.style.fontSize = "14px";
        newText.style.paddingTop = "12.5px"
    
        
        chat.append(user);
        chat.appendChild(newText);

        const newBotText = document.createElement('p');
        const botHeader = document.createElement('p');
        botHeader.innerText = "Bot";
        botHeader.style.alignItems = "center";
        botHeader.style.backgroundColor = "#333333";
        botHeader.style.color= "#777777";
        botHeader.style.textAlign = "left";
        botHeader.style.marginRight = "40px";
        botHeader.style.marginLeft = "40px";
        botHeader.style.fontWeight = "800";
        botHeader.style.textDecoration = "underline";
        botHeader.style.fontSize = "17px";
        newBotText.innerText = "Thank you for providing your input! I'm now generating the results. Please be patient while I compile the information.\n\n";
        newBotText.style.backgroundColor = "#333333";
        newBotText.style.alignItems = "center";
        newBotText.style.textAlign = "left";
        newBotText.style.marginLeft = "40px";
        newBotText.style.marginRight = "40px";
        newBotText.style.fontSize = "14px";
        newBotText.style.paddingTop = "12.5px"
        
        chat.append(botHeader);
        chat.append(newBotText);
        chatMessage = `Can you create plans for ${output["people"]} people in ${output["location"]} at ${output["time"]}. First 
        create three bullet points for places to eat, then create three bullet points for activities nearby, then create three bullet points
        for tourist attractions nearby. And at the end can you create a list that is divided by the rest of the content using an astirek that 
        lists all the places you mentioned each seperated by commas.`;
        chatResponse();
        console.log(chatMessage.toString());
        parseString(chatMessage);
        return;
    }
    else {
        
    }
    
}

function chatResponse(){
    fetch('http://localhost:3000', { // fetches from JS local host
            method: 'POST', // post request
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: chatMessage
            })
    })
    .then(res => res.json()) //used to resolve a promise in api call
    //res.json is from index.js the object file created when the response is given from the API
    .then(data => {
        //repsonse
        console.log(data.completion.content.toString());
        const newBotText = document.createElement('p');
        const botHeader = document.createElement('p');
        botHeader.innerText = "Bot";
        botHeader.style.alignItems = "center";
        botHeader.style.backgroundColor = "#333333";
        botHeader.style.color= "#777777";
        botHeader.style.textAlign = "left";
        botHeader.style.marginRight = "40px";
        botHeader.style.marginLeft = "40px";
        botHeader.style.fontWeight = "800";
        botHeader.style.textDecoration = "underline";
        botHeader.style.fontSize = "17px";
        newBotText.innerText = data.completion.content.toString() + "\n\n";
        newBotText.style.backgroundColor = "#333333";
        newBotText.style.alignItems = "center";
        newBotText.style.textAlign = "left";
        newBotText.style.marginLeft = "40px";
        newBotText.style.marginRight = "40px";
        
        chat.append(botHeader);
        chat.append(newBotText);
        let responseMessage = data.completion.content.toString()
    })
    return responseMessage
}

function parseString(chatResponse){
    let message = chatResponse;
    let pointer = message.charAt(0);
    console.log(pointer);
}

startButton.addEventListener('click', writeCode);
input.addEventListener('keypress', function(e) {
    if (e.key == 'Enter') {
        writeChat();
        input.value = "";
    }
});
submitButton.addEventListener('click', writeChat);
// submitButton.addEventListener('keypress', function(e){
//     if (e.key == 'Enter'){
//         chatResponse();
        
//     }
// });


//Chat response








