import { DATA_END_POINT } from '../utils';
import { transformPlanet, transformPerson, transformStarship } from './adapter';


export default class API {
  constructor() {
    this.url = DATA_END_POINT;

    this.getAllPeople = this.getAllPeople.bind(this);
    this.getAllPlanets = this.getAllPlanets.bind(this);
    this.getAllStarships = this.getAllStarships.bind(this);
  }

  async getResource(url) {
    const response = await fetch(`${this.url}${url}`);
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
    const body = await response.json();
    return body;
  }

  async getAllPeople() {
    const response = await this.getResource('/people/');
    return response.results.map((person) => transformPerson(person));
  }

  async getAllPlanets() {
    const response = await this.getResource('/planets/');
    return response.results.map((planet) => transformPlanet(planet));
  }

  async getPlanetById(id) {
    const planet = await this.getResource(`/planets/${id}/`);
    return transformPlanet(planet, id);
  }

  async getAllStarships() {
    const response = await this.getResource('/starships/');
    return response.results.map((starship) => transformStarship(starship));
  }
}
