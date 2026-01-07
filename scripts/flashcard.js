import { questions, answers } from "./mainArrayHolder.js";

const questionDetails = [{
  title: 'Math Questions',
  question: 'What is 1 + 1?'
},

{
  title: 'Math Questions',
  question: 'What is 2 + 1?'
},

{
  title: 'Math Questions',
  question: 'What is 3 + 1?'
}];

let currentCardIndex = 0;

renderCard();

function renderCard() {
  const questionIndexArray = questionDetails[currentCardIndex];

  document.getElementById('main').innerHTML = `
    <div class="card card-${currentCardIndex}">
      ${questionIndexArray.title}, ${questionIndexArray.question}
    </div>
  `;
}


const leftButton = document.querySelector('.js-scroll-left');
const rightButton = document.querySelector('.js-scroll-right');


leftButton.addEventListener('click', () => {
  currentCardIndex--;

  if (currentCardIndex < 0) {
    currentCardIndex = questionDetails.length - 1;
  }

  renderCard();
});

rightButton.addEventListener('click', () => {
  currentCardIndex++;

  if (currentCardIndex >= questionDetails.length) {
    currentCardIndex = 0;
  }

  renderCard();
});