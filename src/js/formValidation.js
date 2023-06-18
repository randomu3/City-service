import Inputmask from "inputmask";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".request__form");

  let phoneMask = new Inputmask("+7 (999) 999-99-99");
  let phoneInput = document.querySelector('input[name="phone"]');
  phoneMask.mask(phoneInput);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.querySelector('input[name="name"]');
    const phone = form.querySelector('input[name="phone"]');

    if (!name.value.trim()) {
      showError(name);
    }

    if (!phone.value.trim() || !/^(\+?)[0-9\s]+$/.test(phone.value)) {
      showError(phone);
    }

    // if u need validate text form
    // if (!text.value.trim()) {
    //   showError(text);
    // }
  });

  function showError(input) {
    const errorElement = input.parentNode.querySelector(
      ".request__input-error"
    );
    input.classList.add("request__input-error-warning");
    errorElement.classList.add("request__input-error-text-warning");
  }
});
