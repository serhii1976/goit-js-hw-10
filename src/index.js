import './css/styles.css';
import _debounce from 'lodash.debounce';
import onInputChange from './onInputChange';

const DEBOUNCE_DELAY = 300;

export const refs = {
  inputEl: document.querySelector('#search-box'),
  listEl: document.querySelector('.country-list'),
  divEl: document.querySelector('.country-info'),
  bodyEl: document.querySelector('body'),
};
refs.bodyEl.style.paddingLeft = '20px';
refs.listEl.style.padding = '0';
refs.inputEl.addEventListener(
  'input',
  _debounce(onInputChange, DEBOUNCE_DELAY)
);
