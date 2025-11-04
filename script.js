const quizContainer = document.getElementById('quiz-container');
const birthdayContainer = document.getElementById('birthday-container');
const messageContainer = document.getElementById('message-container');
const popupOverlay = document.getElementById('popup-overlay');
const openMessageBtn = document.getElementById('open-message-btn');
const closePopupBtn = document.getElementById('close-popup-btn');

document.getElementById('reveal-btn').addEventListener('click', () => {
  quizContainer.classList.add('hidden');
  birthdayContainer.classList.remove('hidden');
});

document.getElementById('thankyou-btn').addEventListener('click', () => {
  birthdayContainer.classList.add('hidden');
  messageContainer.classList.remove('hidden');
});

document.getElementById('open-message-btn').addEventListener('click', () => {
  messageContainer.classList.add('hidden');
  popupOverlay.classList.remove('hidden');
});

document.getElementById('close-popup-btn').addEventListener('click', () => {
  popupOverlay.classList.add('hidden');
  messageContainer.classList.remove('hidden');
});
