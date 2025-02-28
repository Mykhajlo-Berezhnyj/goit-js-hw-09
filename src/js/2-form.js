const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.elements.email;
const messageInput = feedbackForm.elements.message;
const localStorageKey = 'feedback-form-state';
const maxCount = 400;
const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const errorMessage = document.getElementById('email-error');
const countNumber = document.getElementById('countNumber');
const messageCounter = document.querySelector('.message-counter');
const stopRegex = /[а-яА-ЯёЁіІїЇєЄґҐ\s]/g;

let formData = {
  email: '',
  message: '',
};

// Парсимо локальне сховище з потрібним нам ключем і витягуєм з нього дані в FormData
const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
formData = {
  email: savedData.email || '',
  message: savedData.message || '',
};
console.log('🚀 ~ formData:', formData);

// заповнюємо дані полів вводу
emailInput.value = formData.email;
messageInput.value = formData.message;
if (emailInput.value) {
  validateEmail(emailInput);
}

if (messageInput.value) {
  counterNumber(messageInput);
}

//Додаємо слухача на input і використовуючи делегування вішаєм його на форму
feedbackForm.addEventListener('input', saveToLocalStr);

function saveToLocalStr(event) {
  // записуємо значення інпут в formData, перед записом позбуваємося лишніх знаків табуляції(пробіл і ентер)
  formData[event.target.name] = event.target.value.trim();
  console.log('🚀 ~ feedbackForm.addEventListener ~  formData:', formData);

  validateEmail(emailInput);
  counterNumber(messageInput);
  // записуємо значення formData локальне сховище

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
  console.log(
    '🚀 ~ feedbackForm.addEventListener ~ localStorage:',
    localStorage
  );
}

// Додаємо слухача на кнопку submit, перевірку на пусті поля, якщо все ок: виводимо дані в консоль і все очищуємо
feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    return alert('Fill please all fields');
  }
  console.log('formData:', formData);
  localStorage.removeItem(localStorageKey);
  formData.email = '';
  formData.message = '';
  feedbackForm.reset();
  counterNumber(messageInput);
});

// проводимо валідацію введеного емайл
function validateEmail(emailInput) {
  //забороняємо кирилицю
  const stopRegex = /[а-яА-ЯёЁіІїЇєЄґҐ\s,/]/g;
  let email = emailInput.value;
  // додаємо заборону вводу кирилецею. та знаків табуляції
  emailInput.value = email.replace(stopRegex, '');
  if (stopRegex.test(email)) {
    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Для вводу використовуйте латиницю!';
    return;
  }

  if (!email) {
    emailInput.classList.remove('error');
    errorMessage.classList.remove('error-message');
    errorMessage.textContent = '';
    return;
  }
  if (!regex.test(email)) {
    console.log('🚀 ~ validateEmail ~ !regex.test(email):', !regex.test(email));
    emailInput.classList.add('error');
    errorMessage.classList.add('error-message');
    errorMessage.textContent =
      'Некорректний або неповний email! Перевірте правильність вводу!';
  } else {
    emailInput.classList.remove('error');
    errorMessage.classList.remove('error-message');
    errorMessage.textContent = '';
  }
}

// підраховуємо кількість симолів і виводимо інфо
function counterNumber(messageInput) {
  const message = messageInput.value;
  const currentLength = message.length;
  countNumber.textContent = `${currentLength}/${maxCount}`;
  const avalibleLength = maxCount - currentLength;
  if (currentLength > maxCount * 0.9) {
    messageCounter.classList.remove('hidden');

    if (currentLength >= maxCount) {
      messageCounter.innerHTML = `Ви досягли ліміту в ${maxCount} символів. Якщо маєте додаткові пропозиції, надішліть їх на  
   <a href="mailto:info@goit.ua">info@goit.ua</a>.`;
      messageCounter.style.bottom = '2px';
    } else {
      messageCounter.textContent = `У Вас залишилося доступних ${avalibleLength} символів`;
      messageCounter.style.bottom = '20px';
    }
  } else {
    messageCounter.classList.add('hidden');
  }
}

//забороняємо набір тексту коли досягнуто макимальнох кількості тексту
feedbackForm.addEventListener('keydown', stopInputMsg);

function stopInputMsg(event) {
  console.log(
    '🚀 ~ stopInputMsg ~ event.target.tagName:',
    event.target.tagName
  );
  if (event.target.tagName.toLowerCase() !== 'textarea') {
    return;
  }
  if (
    event.target.value.length >= maxCount &&
    event.key !== 'Delete' &&
    event.code !== 'Backspace'
  ) {
    event.preventDefault();
  }
}
