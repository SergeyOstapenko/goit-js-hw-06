const removeListenerBtn = document.querySelector(
  'button[data-action="decrement"]'
);
const addListenerBtn = document.querySelector(
  'button[data-action="increment"]'
);

let counterValue = document.querySelector("#value");
console.log(counterValue);

let count = 0;

const handleClick = () => {
  console.log("click event listener callback");
};

addListenerBtn.addEventListener("click", () => {
  counterValue.addEventListener("click", handleClick);
  console.log("click  was added to btn");
  count += 1;
  counterValue.textContent = count;
});

removeListenerBtn.addEventListener("click", () => {
  counterValue.removeEventListener("click", handleClick);
  console.log("click  was removed from btn");
  count -= 1;
  counterValue.textContent = count;
});
