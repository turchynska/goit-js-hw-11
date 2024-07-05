import{i as c}from"./assets/vendor-8e8cd629.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function l(r){const t="https://pixabay.com",o="/api/",i=new URLSearchParams({key:"44767579-3ee2796193c18f7fdbcfe2f8d",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${t}${o}?${i}`;return fetch(e).then(s=>s.json())}function n(r){return r.map(t=>`<li class="gallery-item">
      <div class="image-cont">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
        </a>
        <div class="image-descr">
          <div class="descr-box">
            <p class="image-feature">Likes</p>
            <p class="image-data">${t.likes}</p>
          </div>
          <div class="descr-box">
            <p class="image-feature">Views</p>
            <p class="image-data">${t.views}</p>
          </div>
          <div class="descr-box">
            <p class="image-feature">Comments</p>
            <p class="image-data">${t.comments}</p>
          </div>
          <div class="descr-box">
            <p class="image-feature">Downloads</p>
              <p class="image-data">${t.downloads}</p>
          </div>
        </div>
      </div>
    </li>`).join("")}const d=document.querySelector(".search-btn"),u=document.querySelector(".search-form");document.querySelector(".search-input");document.querySelector(".gallery");const f=document.querySelector(".loader");u.addEventListener("submit",r=>{r.preventDefault();const t=r.target.elements.query.value.trim();f.classList.toggle(".visually-hidden"),t===""&&(d.disable=!0,c.error({position:"topRight",message:" Plese enter some text"})),list.innerHTML="",l(t).then(o=>{o.hits&&o.hits.length>0&&n(o.hits)})});
//# sourceMappingURL=commonHelpers.js.map
