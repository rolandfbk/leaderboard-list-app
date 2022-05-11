const list = document.getElementById('ourList');

const populateScore = (obj) => {
  list.innerHTML = '';
  const tr = [];
  const template = [];
  if (obj.length > 0) {
    for (let i = 0; i < obj.length; i += 1) {
      tr[i] = document.createElement('tr');
      template[i] = `
        <td>
          ${obj[i].user}: ${obj[i].score}
        </td>`;

      tr[i].innerHTML = template[i];
      list.appendChild(tr[i]);
    }
  } else {
    const tr = document.createElement('tr');
    const template = '<td>--- The leaderboard is empty ---</td>';

    tr.innerHTML = template;
    list.appendChild(tr);
  }
};

async function loadScore(gameName) {
  const url = ''.concat('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', gameName, '/scores/');
  const request = new Request(url);

  const response = await fetch(request);
  const scoreList = await response.json();
  const scoreListObj = scoreList.result;
  populateScore(scoreListObj);
}

export default loadScore;