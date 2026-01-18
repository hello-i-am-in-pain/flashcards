import "./openModal.js";

const questionDetails = [
  {
    title: "Math Questions",
    question: "What is 1 + 1?",
    answer: "2",
    meterValue: 33,
  },

  {
    title: "Math Questions",
    question: "What is 2 + 1?",
    answer: "3",
    meterValue: 66,
  },

  {
    title: "Math Questions",
    question: "What is 3 + 1?",
    answer: "4",
    meterValue: 100,
  },
];

// let registerEventClicks = 0;

renderCard();

function calculateAnswer() {
  let optionNerd = document.getElementById("option-selector");
  let selectedValue = optionNerd.value;

  if (selectedValue === "") {
    alert("NO VALUE INPUTTED!");
    return; //eject button
  }

  // if ((registerEventClicks = 4)) {
  //   meterId.value = 0;
  //   registerEventClicks = 0;
  // } else {}

  if (selectedValue === answer /* && registerEventClicks < 4 */) {
    meterId.value = questionDetails[currentCardIndex].meterValue;
    alert(`✅ ${selectedValue} is CORRECT!`);
  } else {
    alert(`❌ ${selectedValue} is wrong. Try again!`);
  }
}

function renderCard() {
  const questionIndexArray = questionDetails[currentCardIndex];

  document.getElementById("main").innerHTML = `
    <div class="card">
      <div class="accent-strip"></div>
      <div class="card-inner">
        <div class="card-title">${questionIndexArray.title}</div>
        <div class="card-question">${questionIndexArray.question}</div>
        <div>
        <select name="math-answers" id="option-selector">
          <option value="">-->Select Your Answer<--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <button popovertarget="my-popover">Click for Answer!</button>

        <div id="my-popover" popover>
          <p>${answer}</p>
        </div>

        </div>
      </div>
    </div>
  `;
  document
    .getElementById("option-selector")
    .addEventListener("change", calculateAnswer);
}

const leftButton = document.querySelector(".js-scroll-left");
const rightButton = document.querySelector(".js-scroll-right");

leftButton.addEventListener("click", () => {
  currentCardIndex--;
  // registerEventClicks++;

  if (currentCardIndex < 0) {
    currentCardIndex = questionDetails.length - 1;
  }

  answer = questionDetails[currentCardIndex].answer;

  renderCard();
});

rightButton.addEventListener("click", () => {
  currentCardIndex++;
  // registerEventClicks++;

  if (currentCardIndex >= questionDetails.length) {
    currentCardIndex = 0;
  }

  answer = questionDetails[currentCardIndex].answer;

  renderCard();
});
