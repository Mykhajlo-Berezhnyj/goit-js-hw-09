import"./assets/styles-GIAiwzmD.js";import{S as c}from"./assets/vendor-D0gBiHs0.js";const l=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],s=document.querySelector(".gallery"),r=l.map(({preview:e,original:p,description:t})=>`<li class="gallery-item">
  <a class="gallery-link" href="${p}">
    <img
      class="gallery-image"
      src="${e}"
      alt="${t}"
    />
  </a>
</li>`).join("");s.innerHTML=r;const o=new c(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});document.addEventListener("keydown",g);document.querySelector(".sl-lightbox.is-open");let i=0;const a=Array.from(document.querySelectorAll(".gallery-item"));function g(e){if(console.log("🚀 ~ simpleLightbox.isOpen ~ simpleLightbox.isOpen:",o.isOpen),e.key==="5"||e.key===" "||e.key==="s"||e.key==="S"||e.key==="Enter")if(e.preventDefault(),o.isOpen)o.close();else{const t=a[i].querySelector(".gallery-link");o.open(t)}else if(e.key==="ArrowLeft"||e.key==="A"||e.key==="a"||e.key==="4"||e.key==="numpad4")if(o.isOpen){if(e.key==="ArrowLeft")return;o.prev()}else i=i>0?i-1:a.length-1,n();else if(e.key==="ArrowRight"||e.key==="D"||e.key==="d"||e.key==="6"||e.key==="numpad6")if(o.isOpen){if(e.key==="ArrowRight")return;o.next()}else i=i<a.length-1?i+1:0,console.log("🚀 ~ navigationGallery ~ activeIndex:",i),n()}function n(){a.forEach(t=>t.classList.remove("active"));const e=a[i];console.log("🚀 ~ activeIndex ~ activeIndex:",i),console.log("🚀 ~ updateActiveImg ~ activeItem:",e),e.classList.add("active"),e.querySelector(".gallery-link").focus()}
//# sourceMappingURL=1-gallery.js.map
