const nameStorage = document.getElementById('name');
const scoreStorage = document.getElementById('score');

function setContent() {
  const setFormData = localStorage.getItem('formdata');
  const newFormObj = JSON.parse(setFormData);

  document.getElementById('name').value = newFormObj.nameStorage;
  document.getElementById('score').value = newFormObj.scoreStorage;
}

function populateStorage() {
  const formObj = {
    nameStorage: document.getElementById('name').value,
    scoreStorage: document.getElementById('score').value,
  };

  localStorage.setItem('formdata', JSON.stringify(formObj));

  setContent();
}

export {
  nameStorage, scoreStorage, setContent, populateStorage,
};