import{i as u,S as f}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const l=document.querySelector(".form"),c=document.querySelector(".gallery"),a=document.querySelector(".loader");a.style.display="none";const d={key:"42343852-9aa533cbe727b606c17f868f6",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};l.addEventListener("submit",s=>{s.preventDefault(),a.style.display="inline-block",c.innerHTML="";const t=l.elements.search.value.trim();d.q=t,m().then(i=>h(i)).catch(i=>console.log(i)),l.reset()});function m(){const s=new URLSearchParams(d);return fetch(`https://pixabay.com/api/?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function h(s){if(s.hits.length===0)u.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"});else{const t=s.hits.map(o=>`<li class="gallery-item">
    <a class="gallery-link" href="${o.largeImageURL}" >
      <img
        class="gallery-image"
        src="${o.webformatURL}"
        alt="${o.tags}"
      width = "360"
      />
    </a>
    <div class="img-text">
    <div class="img-info">
    <h3>Likes</h3>
    <p> ${o.likes}</p>
    </div>
    <div class="img-info">
    <h3>Views</h3>
    <p> ${o.views}</p>
    </div>
       <div class="img-info">
    <h3>Comments</h3>
    <p> ${o.comments}</p>
    </div>
       <div class="img-info">
    <h3>Downloads</h3>
    <p> ${o.downloads}</p>
    </div>
      </div>
  </li>`).join("");c.innerHTML=t,new f(".gallery-link").refresh()}a.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
