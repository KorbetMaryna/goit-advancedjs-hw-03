import{a as d,S as m,i as f}from"./assets/vendor-f86ecf37.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&p(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const y="live_PhwyQ190iBWMD41jyFSre7c2tEjoQPL9JZN3xA9orTnwo4Tysj2GLchEe0O80FAe";d.defaults.headers.common["x-api-key"]=y;async function g(){try{return(await d.get("https://api.thecatapi.com/v1/breeds")).data}catch{throw new Error("Failed to fetch cat breeds")}}async function h(e){try{return(await d.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`)).data}catch{throw new Error("Failed to fetch cat by breed")}}const u=document.querySelector(".breed-select"),l=document.querySelector(".cat-info"),c=document.querySelector(".animation"),b=document.querySelector(".loader"),w=document.querySelector(".error"),S=new m({select:u,settings:{placeholderText:"Choose a breed"}}),v={text:"",value:"",placeholder:!0};function s(e){b.style.display=e?"block":"none"}function a(e){w.style.display=e?"block":"none"}async function L(){try{s(!0),a(!1),await g().then(e=>{const o=e.map(n=>({text:n.name,value:n.id}));S.setData([v,...o])}),s(!1),c.addEventListener("animationiteration",()=>{c.getAttribute("src")==="src/img/cat_white.png"?c.setAttibute("src","src/img/cat_black.png"):c.setAttribute("src","src/img/cat_white.png")}),u.addEventListener("change",E)}catch{a(!0),s(!1),f.error({title:"Error",message:"Oops! Something went wrong! Try reloading the page!",position:"center"})}}async function E(){try{s(!0),a(!1);const e=u.value,o=await h(e);s(!1);const n=o[0];l.innerHTML=`
        <div class="cat-container">
            <img class="cat-img" src="${n.url}" alt="сat">
        <div class="cat-text">
            <p class="cat-name" img">${n.breeds[0].name}</p>
            <p class="cat-description">${n.breeds[0].description}</p>
            <p class="cat-temperament"><p>Temperament:</p> ${n.breeds[0].temperament}</p>
        </div> </div>`,l.style.display="block"}catch{a(!0),s(!1),l.style.display="none",f.error({title:"Error",message:"Oops! Something went wrong! Try reloading the page!",position:"center"})}}L();
//# sourceMappingURL=commonHelpers.js.map
