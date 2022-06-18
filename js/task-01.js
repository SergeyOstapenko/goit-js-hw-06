const quantityCategories = document.querySelector("#categories");
console.log("Number of categories:", quantityCategories.children.length);

const arrElem = [...quantityCategories.children];

arrElem.forEach((elem) => {
  console.log("Category:", elem.children[0].textContent);
  console.log("Elements:", elem.children[1].children.length);
});
