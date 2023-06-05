const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');
const nameModal = document.getElementById('name-modal');
const nameInput = document.getElementById('name-input');
const nameSubmit = document.getElementById('name-submit');

let userName = null;
let isFirstMessage = true;

function generateGuestName() {
  const randomNumber = Math.floor(Math.random() * 9000) + 1000;
  return `Guest${randomNumber}`;
}

function showNameModal() {
  nameModal.style.display = 'block';
}

function hideNameModal() {
  nameModal.style.display = 'none';
}

function askUserName() {
  showNameModal();
}

function sendMessage() {
  const message = messageInput.value.trim();
  
  if (isFirstMessage) {
    userName = nameInput.value.trim() || generateGuestName();
    hideNameModal();
    isFirstMessage = false;
  }

  if (message !== '') {
    const messageElement = document.createElement('div');
    messageElement.innerText = `${userName}: ${message}`;
    chatMessages.appendChild(messageElement);
    messageInput.value = '';
  }
}

sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

nameSubmit.addEventListener('click', sendMessage);