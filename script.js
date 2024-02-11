const startButton = document.querySelector('#startButton');
const codeSection = document.querySelector('#appearingCode');
const input = document.querySelector('#textBox');
const submitButton = document.querySelector('#submitButton');
const chat = document.querySelector('#chat');
const box = document.querySelector('#box');
const hero = document.querySelector('#hero');
let responseMessage;
let chatMessage = ``;
let aiResponse;

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
        welcome.style.paddingRight = "40px";
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
        newText.style.paddingTop = "12.5px";
    
        
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
        newBotText.style.paddingTop = "12.5px";
        
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
        newText.style.paddingTop = "12.5px";
    
        
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
        newBotText.style.paddingTop = "12.5px";

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
        newText.style.paddingTop = "12.5px";
    
        
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
        newBotText.style.paddingTop = "12.5px";
        
        chat.append(botHeader);
        chat.append(newBotText);
        chatMessage = `Can you create plans for ${output["people"]} people in ${output["location"]} at ${output["time"]}. First 
        create three bullet points for places to eat, then create three bullet points for activities nearby, then create three bullet points
        for tourist attractions nearby. At the end can you create a list called "*Places" that 
        lists all the places you mentioned each seperated by commas.`;
        chatResponse();
        console.log(chatMessage.toString());
        console.log(aiResponse);
        setTimeout(() =>{
            parseString(aiResponse);
        }, 12500);
        return;
    }
    else {
        
    }
    
}

async function chatResponse(){
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
        newBotText.style.fontSize = "14px";
        newBotText.style.paddingTop = "12.5px";
        
        chat.append(botHeader);
        chat.append(newBotText);
        aiResponse = data.completion.content.toString();
        responseMessage = data.completion.content.toString();
    })
    return responseMessage;
}

async function parseString(aiResponse){
    let array = aiResponse.split('*');
    let importantPlaces = array[1].split(',');
    importantPlaces[0] = importantPlaces[0].substring(8);
    fetchPlaceDetails(importantPlaces);
    return importantPlaces;
}

let newCount = 1;
function fetchPlaceDetails(importantPlaces) {
    for (let i = 0; i < importantPlaces.length; i++){
    fetch(`http://localhost:3000/placeDetails?placeName=${encodeURIComponent(importantPlaces[i])}`)
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            // Display place details on the page
            const placeDetailsDiv = document.getElementById('placeDetails');
            if (data.price_level == null) {
                data.price_level = "N/A";
            }
            if (data.formatted_phone_number == null) {
                data.formatted_phone_number = "N/A";
            }
            if (data.rating == null) {
                data.rating = "N/A";
            }
            const photoUrl = data.photos && data.photos.length > 0
                ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${data.photos[0].photo_reference}&key=AIzaSyB_n34-IOXe5h1mNGiSKKf2kWf-DD1KrZ0`
                : 'Photo not available';
            // placeDetailsDiv.innerHTML = `
            //     <p><strong>Name:</strong> ${data.name}</p>
            //     <p><strong>Rating:</strong> ${data.rating}</p>
            //     <p><strong>Price Level:</strong> ${data.price_level}</p>
            //     <p><strong>Opening Hours:</strong> ${data.opening_hours ? JSON.stringify(data.opening_hours) : 'Not available'}</p>
            //     <p><strong>Phone Number:</strong> ${data.formatted_phone_number}</p>
            //     <p><strong>Address:</strong> ${data.formatted_address}</p>
            //     <p><strong>Photo:</strong> <img src="${photoUrl}" alt="Place Photo"></p>
            // `;
            const num = document.createElement('p');
            num.innerText = newCount + ")";
            newCount++;
            num.style.textAlign = "left";
            num.style.marginLeft = "40px";
            num.style.fontSize = "14px";
            chat.appendChild(num);
            const name = document.createElement('p');
            name.innerHTML = `<p><strong>Name:</strong> ${data.name}</p>`;
            name.style.fontWeight = "bold";
            name.style.alignItems = "center";
            name.style.textAlign = "left";
            name.style.marginLeft = "40px";
            name.style.fontSize = "14px";
            chat.appendChild(name);
            const rating = document.createElement('p');
            rating.innerHTML = `<p><strong>Rating: </strong> ${data.rating}</p>`;
            rating.style.fontWeight = "bold";
            rating.style.textAlign = "left";
            rating.style.paddingLeft = "40px";
            rating.style.alignItems = "center";
            rating.style.fontSize = "14px";
            chat.appendChild(rating);
            const priceLevel = document.createElement('p');
            priceLevel.innerHTML = `<p><strong>Price Level</strong> ${data.price_level}</p>`;
            priceLevel.style.fontWeight = "bold";
            priceLevel.style.textAlign = "left";
            priceLevel.style.paddingLeft = "40px";
            priceLevel.style.alignItems = "center";
            priceLevel.style.fontSize = "14px";
            chat.appendChild(priceLevel);
            const phoneNum = document.createElement('p');
            phoneNum.innerHTML = `<p><strong>Phone Number:</strong> ${data.formatted_phone_number}</p>`;
            phoneNum.style.fontWeight = "bold";
            phoneNum.style.textAlign = "left";
            phoneNum.style.paddingLeft = "40px";
            phoneNum.style.alignItems = "center";
            phoneNum.style.fontSize = "14px";
            chat.appendChild(phoneNum);
            const address = document.createElement('p');
            address.innerHTML = `<p><strong>Address:</strong> ${data.formatted_address}</p>`;
            address.style.fontWeight = "bold";
            address.style.textAlign = "left";
            address.style.paddingLeft = "40px";
            address.style.alignItems = "center";
            address.style.fontSize = "14px";
            chat.appendChild(address);
            const photo = document.createElement('img');
            photo.src= `${photoUrl}`;
            photo.style.marginRight = "590px";
            photo.style.marginTop = "20px";
            photo.style.marginBottom = "20px";
            chat.appendChild(photo);
        })
        .catch(error => console.error('Error fetching place details:', error)); // Log any errors
    }
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








