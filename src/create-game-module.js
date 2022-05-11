async function createGame(game) {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({
      name: game,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const myGameResult = await response.json();
  const myGameObj = myGameResult.result;
  const myGameObjArr = myGameObj.split(' ');
  const myGame = myGameObjArr[3];

  return myGame;
}

export default createGame;