import { Input } from "postcss";

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.elements.email;
const messageInput = feedbackForm.elements.message;
const localStorageKey = "feedback-form-state";
const maxCount = 500;
 

let formData = {
    email: "",
    message: ""
};

// Парсимо локальне сховище з потрібним нам ключем і витягуєм з нього дані в FormData
const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || "{}";
formData = {
    
    email: savedData.email,
    message: savedData.message,
};
console.log("🚀 ~ formData:", formData);

// заповнюємо дані полів вводу, якщо є збережено то з локального сховища, ні то порожні
emailInput.value = formData.email || "";
messageInput.value = formData.message || "";

//Додаємо слухача на input і використовуючи делегування вішаєм його на форму
feedbackForm.addEventListener('input', (event) => {
    // записуємо значення інпут в formData
     console.log("🚀 ~ feedbackForm.addEventListener ~  event.target.name:", event.target.name)
    formData[event.target.name] = event.target.value;
    console.log("🚀 ~ feedbackForm.addEventListener ~  formData:", formData)
    // записуємо значення formData локальне сховище
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
    console.log("🚀 ~ feedbackForm.addEventListener ~ localStorage:", localStorage)
});
    
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
   
