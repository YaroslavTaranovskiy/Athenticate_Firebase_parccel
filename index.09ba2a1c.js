!function(){!function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function n(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",n),e.closeModalBtn.addEventListener("click",n)}();var e=document.querySelector("#log_in_button"),n=document.querySelector(".modal-movie"),t=document.querySelector(".backdrop");function i(){t.classList.toggle("is-hidden"),n.classList.toggle("is-hidden")}function o(e){e.preventDefault();var d=e.target.classList.contains("close-btn__icon");("Escape"===e.key||d||e.target===t)&&(i(),n.innerHTML="",window.removeEventListener("keydown",o),t.removeEventListener("click",o),n.removeEventListener("click",o))}e.addEventListener("click",(function(d){d.preventDefault(),d.target!==e&&(i(),n.innerHTML='\n  <form action="" class="auth-form">\n      <div class="texfield">\n        <input type="text" id="email-input">\n        <label for="email-input">E-mail</label>\n      </div>\n      <div class="texfield">\n        <input type="text" id="password-input">\n        <label for="password-input">Password</label>\n      </div>\n        <button\n          type="submit"\n          id="submit"\n          class="submit-btn"\n        >Log in</button>\n      \n    </form>\n  ',t.addEventListener("click",o),window.addEventListener("keydown",o),n.addEventListener("click",o))}))}();
//# sourceMappingURL=index.09ba2a1c.js.map