import { refs } from './index';
import Notiflix from 'notiflix';

export default function renderCards(countrys) {
  const { flags, name, capital, population, languages } = countrys[0];
  if (countrys.length === 1) {
    const markup = `<div style="display: flex;align-items: center;">
      <img src="${flags.svg}" alt="${
      name.common
    }" width=50px height=50px style='object-fit: contain;'/>
      <h2 style="margin-left: 20px">${name.official}</h2></div>
      <p><span style='font-weight: bold'>Capital:</span> ${capital[0]}</p>
      <p><span style='font-weight: bold'>Population:</span> ${population}</p>
      <p><span style='font-weight: bold'>Languages:</span> ${Object.values(
        languages
      ).join(', ')}</p>`;
    refs.listEl.innerHTML = '';
    refs.divEl.innerHTML = '';
    refs.divEl.insertAdjacentHTML('beforeend', markup);
  }
  if ((countrys.length > 1) & (countrys.length <= 10)) {
    const markup = countrys
      .map(
        country =>
          `<li style="display: flex;align-items: center;">
          <img src="${country.flags.svg}" alt="${country.name.common}" width=50px height=50px style='object-fit: contain;'/>
          <p style="margin: 0 20px">${country.name.official}</p></div>
          </li>`
      )
      .join('');

    refs.divEl.innerHTML = '';
    refs.listEl.innerHTML = '';
    refs.listEl.insertAdjacentHTML('beforeend', markup);
  }
  if (countrys.length > 10) {
    refs.divEl.innerHTML = '';
    refs.listEl.innerHTML = '';
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
}
