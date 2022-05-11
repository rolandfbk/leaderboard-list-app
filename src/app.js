import './style.css';
import {
  nameStorage, scoreStorage, setContent, populateStorage,
} from './form-storage-module.js';
import createGame from './create-game-module.js';
import addScore from './add-score-module.js';
import loadScore from './load-score-module.js';

if (!localStorage.getItem('formdata')) {
  populateStorage();
} else {
  setContent();
}

nameStorage.onchange = populateStorage;
scoreStorage.onchange = populateStorage;

const refreshBtn = document.getElementById('refreshBtn');
const addForm = document.getElementById('addForm');
const name = document.getElementById('name');
const score = document.getElementById('score');

const newGame = createGame('Roland Test Game');
let newGameID;
newGame.then(
  (value) => {
    newGameID = value;
    loadScore(newGameID);

    addForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const newName = name.value;
      const newScore = score.value;
      const addResponse = addScore(newGameID, newName, newScore);

      addResponse.then(
        (value) => {
          if (value === 'Leaderboard score created correctly.') {
            loadScore(newGameID);
          } else {
            alert('Score not saved! Please try again...');
          }

          localStorage.removeItem('formdata');
          addForm.reset();
          name.focus();
        },
      );

      refreshBtn.addEventListener('click', () => {
        loadScore(newGameID);
      });
    });
  },
);