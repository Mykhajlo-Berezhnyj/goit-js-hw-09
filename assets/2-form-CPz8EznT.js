const l=document.querySelector(".feedback-form"),m=l.elements.email,c=l.elements.message,u="feedback-form-state",r=400,f=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,o=document.getElementById("email-error"),d=document.querySelector(".chek"),v=document.getElementById("countNumber"),n=document.querySelector(".message-counter"),L=/[^a-zA-Z0-9._@-]/;let t={email:"",message:""};const p=JSON.parse(localStorage.getItem(u))||{};t={email:p.email||"",message:p.message||""};m.value=t.email;c.value=t.message;m.value&&x(m);c.value&&g(c);l.addEventListener("input",h);function h(e){x(m),g(c),t[e.target.name]=e.target.value.trim(),console.log("🚀 ~ saveToLocalStr ~ formData:",t),localStorage.setItem(u,JSON.stringify(t))}l.addEventListener("submit",e=>{if(e.preventDefault(),!t.email||!t.message)return alert("Fill please all fields");console.log("formData:",t),localStorage.removeItem(u),t.email="",t.message="",l.reset(),g(c),v.textContent=`0/${r}`,n.classList.add("hidden")});function x(e){let s=e.value;if(e.addEventListener("beforeinput",a=>{const i=a.data;L.test(i)&&a.preventDefault()}),L.test(s)){d.classList.add("hidden"),o.classList.add("error-message"),o.textContent="❗ Будь ласка не використовуйте кирилицю чи табуляцію при вводі!";return}if(!s){e.classList.remove("error"),o.classList.remove("error-message"),o.textContent="";return}f.test(s)?(e.classList.remove("error"),o.classList.remove("error-message"),o.textContent="",d.classList.remove("hidden")):(console.log("🚀 ~ validateEmail ~ !regex.test(email):",!f.test(s)),d.classList.add("hidden"),e.classList.add("error"),o.classList.add("error-message"),o.textContent="❗ Некорректний або неповний email! Перевірте правильність вводу!")}function g(e){const a=e.value.length;v.textContent=`${a}/${r}`;const i=r-a;a>r*.9?(n.classList.remove("hidden"),a>=r?(n.innerHTML=`❗ Ви досягли ліміту в ${r} символів. Якщо маєте додаткові пропозиції, надішліть їх на  
   <a href="mailto:info@goit.ua">info@goit.ua</a>.`,n.style.bottom="2px"):(n.textContent=`⚠ У Вас залишилося доступних ${i} символів`,n.style.bottom="20px")):n.classList.add("hidden")}l.addEventListener("keydown",D);function D(e){console.log("🚀 ~ stopInputMsg ~ event.target.tagName:",e.target.tagName),e.target.tagName.toLowerCase()==="textarea"&&e.target.value.length>=r&&e.key!=="Delete"&&e.code!=="Backspace"&&e.code!=="ArrowRight"&&e.code!=="ArrowLeft"&&e.code!=="ArrowUp"&&e.code!=="ArrowDown"&&e.preventDefault()}c.addEventListener("paste",y);function y(e){e.preventDefault();const s=e.target.value,a=r-s.length,b=e.clipboardData.getData("text").substring(0,a);e.target.value=s+b,g(e.target),h(e)}
//# sourceMappingURL=2-form-CPz8EznT.js.map
