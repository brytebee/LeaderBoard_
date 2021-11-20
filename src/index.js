import './style.css';
import { getScores, postScore } from './modules/api.js';

document.querySelector('#submit').addEventListener('click', (e) => {
  if (
    document.querySelector('#name').value !== '' &&
    document.querySelector('#score').value !== ''
  ) {
    e.preventDefault();
    postScore().then(() => getScores());
  }
});

document.querySelector('#refresh').addEventListener('click', () => getScores());

window.addEventListener('load', () => getScores());
