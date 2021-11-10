const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/x34jAfIEOe8sbnLr2WEb/scores';

const showScores = (scores) => {
  const root = document.querySelector('#root');
  root.textContent = '';
  scores.forEach((item) => {
    const li = document.createElement('li');
    const userName = document.createElement('span');
    const userScore = document.createElement('span');

    li.classList = 'single-list-item l-height-2x';
    userName.classList = 'user-name';
    userScore.classList = 'user-score';

    userName.textContent = item.user;
    userScore.textContent = item.score;

    li.append(userName, userScore);
    root.appendChild(li);
  });
};

const getScores = async () => {
  const res = await fetch(baseUrl);
  const scores = await res.json();
  showScores(scores.result);
};

const postScore = async () => {
  const newScore = {
    user: document.querySelector('#name').value,
    score: document.querySelector('#score').value,
  };

  (
    await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newScore),
    })
  ).json();

  document.querySelector('#name').value = '';
  document.querySelector('#score').value = '';
};

export { getScores, postScore };