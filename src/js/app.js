// const logInBtn = document.querySelector('#log_in_button')


// logInBtn.addEventListener('click', openModal)



// function openModal() {

// }



const logInBtn = document.querySelector('#log_in_button');
const modalMovie = document.querySelector('.modal-movie');
const backdrop = document.querySelector('.backdrop');

logInBtn.addEventListener('click', onCardClick);

function onCardClick(e) {
  e.preventDefault();
  if (e.target !== logInBtn) {
    modalMovieToggle();
    renderMovieInfo();
    backdrop.addEventListener('click', onCloseModal);
    window.addEventListener('keydown', onCloseModal);
    modalMovie.addEventListener('click', onCloseModal);
  }
}

function modalMovieToggle() {
  backdrop.classList.toggle('is-hidden');
  modalMovie.classList.toggle('is-hidden');
}

function onCloseModal(e) {
  e.preventDefault();
  const isContainsClass = e.target.classList.contains('close-btn__icon');

  if (e.key === 'Escape' || isContainsClass || e.target === backdrop) {
    modalMovieToggle();
    clearMovieInfo();
    window.removeEventListener('keydown', onCloseModal);
    backdrop.removeEventListener('click', onCloseModal);
    modalMovie.removeEventListener('click', onCloseModal);
  }
}

function clearMovieInfo() {
  modalMovie.innerHTML = '';
}

function renderMovieInfo() {
  modalMovie.innerHTML = `
  <form action="" class="auth-form">
      <div class="texfield">
        <input type="text" id="email-input">
        <label for="email-input">E-mail</label>
      </div>
      <div class="texfield">
        <input type="text" id="password-input">
        <label for="password-input">Password</label>
      </div>
        <button
          type="submit"
          id="submit"
          class="submit-btn"
        >Log in</button>
      
    </form>
  `
}



// kod iz video

