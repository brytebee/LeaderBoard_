import './style.css';
const dommyList = [
  {
    userName: 'Matthew',
    userScore: 33
  },
  {
    userName: 'Jane',
    userScore: 38
  },
  {
    userName: 'Banny',
    userScore: 28
  },
  {
    userName: 'Judas',
    userScore: 20
  },
  {
    userName: 'Larry',
    userScore: 27
  },
  {
    userName: 'Haji',
    userScore: 39
  },
];

const root = document.querySelector('#root');

dommyList.forEach((item) => {
  const li = document.createElement('li');
  const userName = document.createElement('span');
  const userScore = document.createElement('span');

  li.classList = 'single-list-item l-height-2x';
  userName.classList = 'user-name';
  userScore.classList = 'user-score';

  userName.textContent = item.userName;
  userScore.textContent = item.userScore;

  li.append(userName, userScore);
  root.appendChild(li);
});