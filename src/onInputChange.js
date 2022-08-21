import { fetchCountries } from './fetchCountries';

export default function onInputChange(event) {
  const name = event.target.value.trim();
  if (name !== '') {
    return fetchCountries(name);
  }
}
