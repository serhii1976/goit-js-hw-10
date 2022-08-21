import Notiflix from 'notiflix';

export default function onError(error) {
  Notiflix.Notify.failure('Oops, there is no country with that name');
  console.log(error);
}
