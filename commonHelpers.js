import{i as c,S as d}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function u(o){const t="https://pixabay.com",r="/api/",a=new URLSearchParams({key:"44767579-3ee2796193c18f7fdbcfe2f8d",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${t}${r}?${a}`;return fetch(e).then(s=>s.json())}function m(o){return o.map(t=>`<li class="gallery-item">
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
    </li>`).join("")}const p=document.querySelector(".search-btn"),f=document.querySelector(".search-form"),g=document.querySelector(".search-input"),l=document.querySelector(".gallery"),n=document.querySelector(".loader");f.addEventListener("submit",o=>{o.preventDefault();const t=o.target.elements.query.value.trim();n.classList.toggle(".visually-hidden"),t===""&&(p.disable=!0,c.error({position:"topRight",message:" Plese enter some text"})),l.innerHTML="",u(t).then(r=>{if(r.hits&&r.hits.length>0){const a=m(r.hits);l.insertAdjacentHTML("beforeend",a),n.classList.toggle("visual-hidden"),new d(".gallery a",{captions:!0,captionDelay:250,captionPosition:"bottom",captionsData:"alt"}).refresh()}else c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n.classList.toggle("visually-hidden")}).catch(r=>{console.log(r),c.error({position:"topRight",message:"Sorry, the request cant be completed at this time. Please try again"})}),g.value=""});
//# sourceMappingURL=commonHelpers.js.map
