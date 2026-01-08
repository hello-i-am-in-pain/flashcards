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
    <div class="card">
      <div class="accent-strip"></div>
      <div class="card-inner">
        <div class="card-title">${questionIndexArray.title}</div>
        <div class="card-question">${questionIndexArray.question}</div>
      </div>
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