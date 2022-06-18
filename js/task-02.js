const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const listItem = ingredients.map((elem) => {
  const items = document.createElement("li");
  items.textContent = `${elem}`;
  items.classList.add("item");

  return items;
});
list.append(...listItem);
