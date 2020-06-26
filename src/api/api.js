import { DATA_END_POINT } from '../utils';
import { transformPlanet, transformPerson, transformStarship } from './adapter';


export default class API {
  constructor() {
    this.url = DATA_END_POINT;

    this.getAllPeople = this.getAllPeople.bind(this);
    this.getAllPlanets = this.getAllPlanets.bind(this);
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
    return response.results.map((person, i) => transformPerson(person, i));
  }

  async getPersonById(id) {
    const person = await this.getResource(`/people/${id}/`);
    return transformPerson(person, id);
  }

  async getAllPlanets() {
    const response = await this.getResource('/planets/');
    return response.results.map((planet, i) => transformPlanet(planet, i));
  }

  async getPlanetById(id) {
    const planet = await this.getResource(`/planets/${id}/`);
    return transformPlanet(planet, id);
  }

  async getAllStarships() {
    const response = await this.getResource('/starship/');
    return response.results.map((starship, i) => transformStarship(starship, i));
  }

  async getStarshipById(id) {
    const starship = await this.getResource(`/starship/${id}/`);
    return transformStarship(starship, id);
  }
}
