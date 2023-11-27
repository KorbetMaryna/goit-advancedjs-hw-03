import{a as i,S as u}from"./assets/vendor-db58f109.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const p="live_PhwyQ190iBWMD41jyFSre7c2tEjoQPL9JZN3xA9orTnwo4Tysj2GLchEe0O80FAe";i.defaults.headers.common["x-api-key"]=p;async function m(){try{return(await i.get("https://api.thecatapi.com/v1/breeds")).data}catch{throw new Error("Failed to fetch cat breeds")}}async function f(t){try{return(await i.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${t}`)).data}catch{throw new Error("Failed to fetch cat by breed")}}const l=document.querySelector(".breed-select"),s=document.querySelector(".cat-info"),n=document.querySelector(".animation"),h=new u({select:l,settings:{placeholderText:"Choose a breed"}}),y={text:"",value:"",placeholder:!0};async function g(){try{await m().then(t=>{const o=t.map(c=>({text:c.name,value:c.id}));h.setData([y,...o])}),n.addEventListener("animationiteration",()=>{n.getAttribute("src")==="./img/cat_white.png"?n.setAttribute("src","./img/cat_black.png"):n.setAttribute("src","./img/cat_white.png")}),l.addEventListener("change",b)}catch(t){console.log(t)}}async function b(){try{const t=l.value,c=(await f(t))[0];s.innerHTML=`
        <div class="cat-container">
            <img class="cat-img" src="${c.url}" alt="сat">
        <div class="cat-text">
            <p class="cat-name" img">${c.breeds[0].name}</p>
            <p class="cat-description">${c.breeds[0].description}</p>
            <p class="cat-temperament"><p>Temperament:</p> ${c.breeds[0].temperament}</p>
        </div> </div>`,s.style.display="block"}catch(t){s.style.display="none",console.log(t)}}g();
//# sourceMappingURL=commonHelpers.js.map