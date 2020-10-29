import { DATA_END_POINT } from '../utils';
import { transformPlanet, transformPerson, transformStarship } from './adapter';


export const getResource = async (url) => {
  const response = await fetch(`${DATA_END_POINT}${url}`);
  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
  const body = await response.json();
  return body;
};

export const getAllPeople = async () => {
  const response = await getResource('/people/');
  return response.results.map((person) => transformPerson(person));
};

export const getAllPlanets = async () => {
  const response = await getResource('/planets/');
  return response.results.map((planet) => transformPlanet(planet));
};

export const getPlanetById = async (id) => {
  const planet = await getResource(`/planets/${id}/`);
  return transformPlanet(planet, id);
};

export const getAllStarships = async () => {
  const response = await getResource('/starships/');
  return response.results.map((starship) => transformStarship(starship));
};
