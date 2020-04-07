'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var popupBtn = document.querySelector('#about-btn');
  var popup = document.querySelector('#popup');
  var closeBtn = document.querySelector('#close-popup');
  var modalBg = document.querySelector('.modal-background');
  var closeBtnSucces = document.querySelector('#succes-close-btn');
  var closeBtnError = document.querySelector('#error-close-btn');
  var successMessage = document.querySelector('#success-box');
  var errorMessage = document.querySelector('#error-box');

  var closePopup = function () {
    popup.classList.add('modal-content-hide');
    modalBg.style.display = 'none';
    document.removeEventListener('keydown', onEscPress);
    document.removeEventListener('mouseup', closeIffield);
    setTimeout(function () {
      popup.classList.remove('modal-content-show');

      popup.classList.remove('modal-content-hide');
    }, 295);
  };

  var onEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
      closeSucces();
    }
  };

  var closeIffield = function (evt) {
    if (evt.target === modalBg) {
      closePopup();
      closeSucces();
    }
  };

  var openPopup = function () {
    popup.classList.add('modal-content-show');
    modalBg.style.display = 'block';
    document.addEventListener('keydown', onEscPress);
    document.addEventListener('mouseup', closeIffield);
  };

  var closeSucces = function () {
    errorMessage.classList.add('succes-content-hide');
    successMessage.classList.add('succes-content-hide');
    setTimeout(function () {
      modalBg.style.display = 'none';
      successMessage.style.display = 'none';
      errorMessage.style.display = 'none';
      errorMessage.classList.remove('succes-content-hide');
      successMessage.classList.remove('succes-content-hide');
    }, 200);
  };

  // var closeSucces = function () {
  //   successMessage.style.display = 'none';
  //   modalBg.style.display = 'none';
  //   errorMessage.style.display = 'none';
  // };

  popupBtn.addEventListener('click', openPopup);
  closeBtn.addEventListener('click', closePopup);
  closeBtnSucces.addEventListener('click', closeSucces);
  closeBtnError.addEventListener('click', closeSucces);
})();
