import API from '../src/api/api';

const END_POINT = 'https://swapi.dev/api';
const api = new API(END_POINT);

api.getAllPeople()
  .then((body) => body);
