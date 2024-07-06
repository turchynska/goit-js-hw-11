import{S as d,i as n}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function u(a){const t="https://pixabay.com",r="/api/",o=new URLSearchParams({key:"44767579-3ee2796193c18f7fdbcfe2f8d",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${t}${r}?${o}`;return fetch(e).then(s=>s.json())}function m(a){return a.map(t=>`<li class="gallery-item">
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
    </li>`).join("")}document.querySelector(".search-btn");const p=document.querySelector(".search-form"),f=document.querySelector(".search-input"),l=document.querySelector(".gallery"),i=document.querySelector(".loader");let g=new d(".gallery a",{captions:!0,captionDelay:250,captionPosition:"bottom",captionsData:"alt"});p.addEventListener("submit",a=>{a.preventDefault();const t=a.target.elements.query.value.trim();if(t===""){n.error({position:"topRight",message:"Please enter some text"});return}l.innerHTML="",i.classList.remove("visually-hidden"),u(t).then(r=>{if(r.hits&&r.hits.length>0){const o=m(r.hits);l.insertAdjacentHTML("beforeend",o),i.classList.add("visually-hidden"),g.refresh()}else n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),i.classList.add("visually-hidden")}).catch(r=>{console.log(r),n.error({position:"topRight",message:"Sorry, the request can't be completed at this time. Please try again"}),i.classList.add("visually-hidden")}),f.value=""});
//# sourceMappingURL=commonHelpers.js.map
