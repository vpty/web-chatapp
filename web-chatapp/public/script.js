const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');
const nameModal = document.getElementById('name-modal');
const nameInput = document.getElementById('name-input');
const nameSubmit = document.getElementById('name-submit');
const emojiButton = document.getElementById('emoji');
const emojiModal = document.getElementById('emoji-modal');
const emojiList = document.getElementById('emoji-list');

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
    messageElement.classList.add('message');
    if (userName) {
      messageElement.classList.add('user-message');
    } else {
      messageElement.classList.add('chat-message');
    }
    messageElement.innerText = userName ? `${userName}: ${message}` : message;
    chatMessages.appendChild(messageElement);
    messageInput.value = '';
  }
}

function showEmojiModal() {
  emojiModal.style.display = 'block';
}

function hideEmojiModal() {
  emojiModal.style.display = 'none';
}

function selectEmoji(event) {
  const selectedEmoji = event.target.innerText;
  messageInput.value += selectedEmoji;
  hideEmojiModal();
  messageInput.focus();
}

sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

nameSubmit.addEventListener('click', sendMessage);

emojiButton.addEventListener('click', showEmojiModal);

emojiList.addEventListener('click', selectEmoji);

window.addEventListener('click', (event) => {
  if (event.target !== emojiButton) {
    hideEmojiModal();
  }
});