// const pageCreation = () => {
//   const mainHeading = document.createElement("h1");
//   mainHeading.textContent = "More Events Practice";
//   const button = document.createElement("button");
//   button.id = "add-one";
//   button.textContent = "Click  me to increment!";
//   const p = document.createElement("p");
//   p.id = "results";
//   p.textContent = "0";
//   document.body.append(mainHeading, button, p);
// };

const incrementByOne = () => {
  document.querySelector("#results").textContent++;
};

const main = () => {
  document.querySelector("#add-one").addEventListener("click", incrementByOne);
};

main();
