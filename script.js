const nglForm = document.getElementById("nglForm");
const messageInput = document.getElementById("message");
const messagesContainer = document.getElementById("messagesContainer");

let messages =[];

nglForm.addEventListener('submit', function(event){
    event.preventDefault();

    const message = messageInput.value.trim();

    if(message){
        messages.push(message);
        messageInput.value ="";
        displayMessages();
    }

});
window.addEventListener("load", ()=>{
    const savedMessages = localStorage.getItem("messages");
    if (savedMessages){
        messages = JSON.parse(savedMessages);
        displayMessages();
    }
});

function displayMessages(){
    messagesContainer.innerHTML ="";
    messages.forEach((msg, index) =>{
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.textContent = "";
        messagesContainer.appendChild(messageElement);
    });


localStorage.setItem("message", JSON.stringify(messages));

}

