const n=document.querySelector(".feedback-form"),i=n.elements.email,c=n.elements.message,d="feedback-form-state",o=400,f=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,s=document.getElementById("email-error"),g=document.querySelector(".chek"),v=document.getElementById("countNumber"),r=document.querySelector(".message-counter"),L=/[^a-zA-Z0-9._@-]/g;let t={email:"",message:""};const p=JSON.parse(localStorage.getItem(d))||{};t={email:p.email||"",message:p.message||""};i.value=t.email;c.value=t.message;i.value&&h(i);c.value&&m(c);n.addEventListener("input",x);function x(e){t[e.target.name]=e.target.value.trim(),h(i),m(c),localStorage.setItem(d,JSON.stringify(t))}n.addEventListener("submit",e=>{if(e.preventDefault(),!t.email||!t.message)return alert("Fill please all fields");console.log("formData:",t),localStorage.removeItem(d),t.email="",t.message="",n.reset(),m(c),v.textContent=`0/${o}`,r.classList.add("hidden")});function h(e){let a=e.value;if(e.value=a.replace(L,""),L.test(a)){g.classList.add("hidden"),s.classList.add("error-message"),s.textContent="❗ Будь ласка не використовуйте кирилицю чи табуляцію при вводі!";return}if(!a){e.classList.remove("error"),s.classList.remove("error-message"),s.textContent="";return}f.test(a)?(e.classList.remove("error"),s.classList.remove("error-message"),s.textContent="",g.classList.remove("hidden")):(console.log("🚀 ~ validateEmail ~ !regex.test(email):",!f.test(a)),g.classList.add("hidden"),e.classList.add("error"),s.classList.add("error-message"),s.textContent="❗ Некорректний або неповний email! Перевірте правильність вводу!")}function m(e){const l=e.value.length;v.textContent=`${l}/${o}`;const u=o-l;l>o*.9?(r.classList.remove("hidden"),l>=o?(r.innerHTML=`❗ Ви досягли ліміту в ${o} символів. Якщо маєте додаткові пропозиції, надішліть їх на  
   <a href="mailto:info@goit.ua">info@goit.ua</a>.`,r.style.bottom="2px"):(r.textContent=`⚠ У Вас залишилося доступних ${u} символів`,r.style.bottom="20px")):r.classList.add("hidden")}n.addEventListener("keydown",y);function y(e){console.log("🚀 ~ stopInputMsg ~ event.target.tagName:",e.target.tagName),e.target.tagName.toLowerCase()==="textarea"&&e.target.value.length>=o&&e.key!=="Delete"&&e.code!=="Backspace"&&e.code!=="ArrowRight"&&e.code!=="ArrowLeft"&&e.code!=="ArrowUp"&&e.code!=="ArrowDown"&&e.preventDefault()}c.addEventListener("paste",C);function C(e){e.preventDefault();const a=e.target.value,l=o-a.length,b=e.clipboardData.getData("text").substring(0,l);e.target.value=a+b,m(e.target),x(e)}
//# sourceMappingURL=2-form-syCNHCXy.js.map
