import renderCards from './renderCards';
import onError from './onError';

export const fetchCountries = name => {
  const MAIN_URL = 'https://restcountries.com/v3.1/name/';
  const SEARCH_FILTER = 'fields=name,capital,population,flags,languages';
  console.log(name);
  return fetch(`${MAIN_URL}${name}?${SEARCH_FILTER}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(renderCards)
    .catch(onError);
};
