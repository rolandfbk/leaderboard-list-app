import './style.css';
import {
  nameStorage, scoreStorage, setContent, populateStorage,
} from './form-storage-module.js';

if (!localStorage.getItem('formdata')) {
  populateStorage();
} else {
  setContent();
}

nameStorage.onchange = populateStorage;
scoreStorage.onchange = populateStorage;