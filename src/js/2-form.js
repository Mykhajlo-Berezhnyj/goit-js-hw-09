const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.elements.email;
const messageInput = feedbackForm.elements.message;
const localStorageKey = "feedback-form-state";
const maxCount = 400;
const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const errorMessage = document.getElementById('email-error');
const countNumber = document.getElementById('countNumber');
 

let formData = {
    email: "",
    message: ""
};

// Парсимо локальне сховище з потрібним нам ключем і витягуєм з нього дані в FormData
const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
formData = {
    
    email: savedData.email || "",
    message: savedData.message || "",
};
console.log("🚀 ~ formData:", formData);

// заповнюємо дані полів вводу
emailInput.value = formData.email;
messageInput.value = formData.message;
if (emailInput.value) {
    validateEmail(formData.email);
} 

//Додаємо слухача на input і використовуючи делегування вішаєм його на форму
feedbackForm.addEventListener('input', saveToLocalStr)

function saveToLocalStr(event) {
    // записуємо значення інпут в formData, перед записом позбуваємося лишніх знаків табуляції(пробіл і ентер)
    formData[event.target.name] = event.target.value.trim();
    console.log("🚀 ~ feedbackForm.addEventListener ~  formData:", formData);
    
    validateEmail(formData.email);
     counterNumber(formData.message);
    // записуємо значення formData локальне сховище
   
         localStorage.setItem(localStorageKey, JSON.stringify(formData));
    console.log("🚀 ~ feedbackForm.addEventListener ~ localStorage:", localStorage)

};
    
// Додаємо слухача на кнопку submit, перевірку на пусті поля, якщо все ок: виводимо дані в консоль і все очищуємо
feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
       return alert("Fill please all fields");    
    }
    console.log("formData:", formData);
    localStorage.removeItem(localStorageKey);
    formData.email = '';
    formData.message = '';
    feedbackForm.reset();
    
})
   
function validateEmail(email) {
    const isError = document.querySelector(".error-message")
    if (!email) {
         emailInput.classList.remove('error');
    errorMessage.classList.remove('error-message');
        errorMessage.textContent = ('');
        return
    }
   if (!regex.test(email)) {
       console.log("🚀 ~ validateEmail ~ !regex.test(email):", !regex.test(email))
       emailInput.classList.add('error');
       errorMessage.classList.add('error-message');
       errorMessage.textContent = "Некорректний або неповний email! Перевірте правильність вводу!";  
   } else {
       emailInput.classList.remove('error');
       errorMessage.classList.remove('error-message');
       errorMessage.textContent = ('');
   }

}

function counterNumber(message) {
    const currentLength = messageInput.value.length;
   countNumber.textContent = `${currentLength}/${maxCount}`
 
}
