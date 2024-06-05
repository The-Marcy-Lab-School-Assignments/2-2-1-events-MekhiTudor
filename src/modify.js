/** FEEDBACK: Great job getting all test cases to pass! */
// These are your event handlers
console.log("hello wrld!");

const clickCounterHandler = (event) => {
  event.target.dataset.clicks++;
  if (event.target.dataset.clicks === "1")
    event.target.textContent = "I've been clicked 1 time.";
  else
    event.target.textContent = `I've been clicked ${event.target.dataset.clicks} times!`;

  // console.log(event.target.dataset.clicks);
};
//clickCounterHandler();

const handleKeydown = (event) => {
  //console.log(event);
  document.querySelector(
    "#keydown-tracker"
  ).textContent = `You pressed ${event.code}`;
};

// We've started this one for you
const handleDelegation = (event) => {
  const resultSpan = document.querySelector("#delegation-result");
  if (event.target.matches(".grid-item"))
    resultSpan.textContent = event.target.textContent;
};

const addNewRandomNumber = (event) => {
  //add event listener to #add-random-num button
  //when clicked it creates a new li element with a number greater than 0.
  //the li's are children to the #random num ul
  const li = document.createElement("li");
  li.textContent = Math.floor(Math.random() * 100);
  document.querySelector("#random-numbers").append(li);
};

const removeButton = () => {
  document
    .querySelector("#delegation")
    .removeEventListener("click", handleDelegation);
};
// Select the elements and attach your event handlers inside main
const main = () => {
  const delegationContainer = document.querySelector("#delegation");
  delegationContainer.addEventListener("click", handleDelegation);
  const clickCountListener = document.querySelector("#click-button");
  clickCountListener.addEventListener("click", clickCounterHandler);
  const sencondButton = document.querySelector("#inline-example");
  sencondButton.addEventListener("click", clickCounterHandler);
  document.body.addEventListener("keydown", handleKeydown);
  const ranNumButtonListener = document.querySelector("#add-random-num");
  ranNumButtonListener.addEventListener("click", addNewRandomNumber);
  document.querySelector("#remove").addEventListener("click", removeButton);
};

main();
