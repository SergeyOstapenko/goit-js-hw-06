const inputEl = document.querySelector("input");

inputEl.addEventListener("blur", () => {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
    return;
  }
  inputEl.classList.add("invalid");
  inputEl.classList.add("valid");
});
