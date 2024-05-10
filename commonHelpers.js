import"./assets/vendor-86291ea8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const i=r=>r.map(({urls:o,alt_description:s,likes:n})=>`
        <div class="col">
          <div class="card shadow-sm">
            <img src="${o.regular}" alt="${s}" class="gallery-img img-fluid" />
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
        </div>`).join(""),a="813609-98f1a5b8a61f7cd1a2ca10379",l="https://pixabay.com/api",u=(r="cat")=>{const o=new URLSearchParams({query:r,client_id:a,orientation:"horizontal"});return fetch(`${l}?${o}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})};document.querySelector(".js-search-form");document.querySelector(".js-gallery");document.querySelector(".js-loader");u().then(r=>{gelleryEL.innerHTML=i(imagesData.results)}).catch(r=>console.log(r));
//# sourceMappingURL=commonHelpers.js.map
