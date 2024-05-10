import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u=s=>s.map(({urls:o,alt_description:t,likes:n})=>`
        <div class="col">
          <div class="card shadow-sm">
            <img src="${o.regular}" alt="${t}" class="gallery-img img-fluid" />
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">
                    View
                  </button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">
                    Edit
                  </button>
                </div>
                <small class="text-body-secondary">Likes: ${n}</small>
              </div>
            </div>
          </div>
        </div>`).join(""),d="813609-98f1a5b8a61f7cd1a2ca10379",m="https://pixabay.com/api/",f=(s="cat")=>{const o=new URLSearchParams({key:d,q:s,orientation:"horizontal"});return fetch(`${m}?${o.toString()}`).then(t=>{if(!t.ok)throw new Error(`Error ${t.status}: ${t.statusText}`);return t.json()})},y=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),l=document.querySelector(".js-loader");function h(s){s.preventDefault();const o=s.target.elements.searchKeyword.value.trim();if(o===""){c.innerHTML="",s.target.reset(),a.show({message:"Input field can not be empty",position:"topRight",timeout:2e3,color:"red"});return}c.innerHTML="",l.classList.remove("is-hidden"),f(o).then(t=>{t.total===0&&a.show({message:"Sorry, there are no images for this query",position:"topRight",timeout:2e3,color:"red"}),c.innerHTML=u(t.results)}).catch(t=>console.log(t)).finally(()=>{s.target.reset(),l.classList.add("is-hidden")})}y.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
