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

questionDetails.forEach((question) => {
  const div = document.createElement('div');

  div.textContent = question.title

  questions.push(div);
});

let html = '';

questionDetails.forEach(question => {
  html += `<div class="flashcard">${question.title}, ${question.question}</div>`;
});

document.getElementById('main').innerHTML = html;
