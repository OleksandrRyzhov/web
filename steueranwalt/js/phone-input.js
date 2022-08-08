"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let phoneInputs = document.querySelectorAll("input[data-tel-input]");

  let getInputNumbersValue = function (input) {
    return input.value.replace(/\D/g, "");
  };

  let onPhoneInput = function (e) {
    let input = e.target,
      inputNumbersValue = getInputNumbersValue(input);

    if (!inputNumbersValue) {
      input.value = "";
      return;
    }
    input.value = "+" + inputNumbersValue;
  };

  for (let index = 0; index < phoneInputs.length; index++) {
    let input = phoneInputs[index];
    input.addEventListener("input", onPhoneInput);
  }
});
