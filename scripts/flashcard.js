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

let html = '';

questionDetails.forEach((question, index) => {
  html += `
    <div class="card card-${index}">
      ${question.title}, ${question.question}
    </div>
  `;
});

document.getElementById('main').innerHTML = html;
