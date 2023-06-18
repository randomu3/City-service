import Inputmask from "inputmask";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".request__form");

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

    // if (!text.value.trim()) {
    //   showError(text);
    // }
  });

  function showError(input) {
    const errorElement = input.parentNode.querySelector(".request__input-error");
    input.classList.add("request__input-error-warning");
    errorElement.classList.add("request__input-error-text-warning");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let phoneMask = new Inputmask("+7 (999) 999-99-99");
  let phoneInputs = document.querySelectorAll('input[name="phone"]');
  phoneInputs.forEach((input) => phoneMask.mask(input));
});
