async function addScore(gameName, nameInput, scoreInput) {
  const url = ''.concat('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', gameName, '/scores/');

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: nameInput,
      score: scoreInput,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const myScoreResult = await response.json();
  const myScoreObj = myScoreResult.result;

  return myScoreObj;
}

export default addScore;