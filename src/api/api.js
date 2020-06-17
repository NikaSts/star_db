import { DATA_END_POINT } from '../utils';
import { transformPlanet, transformPerson, transformStarship } from './adapter';


export default class API {
  constructor() {
    this.url = DATA_END_POINT;
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
    return response.result;
  }

  async getPersonById(id) {
    const person = await this.getResource(`/people/${id}/`);
    return transformPerson(person, id);
  }

  async getAllPlanets() {
    const response = await this.getResource('/planets/');
    return response.result;
  }

  async getPlanetById(id) {
    const planet = await this.getResource(`/planets/${id}/`);
    return transformPlanet(planet, id);
  }

  async getAllStarships() {
    const response = await this.getResource('/starship/');
    return response.result;
  }

  async getStarshipById(id) {
    const starship = await this.getResource(`/starship/${id}/`);
    return transformStarship(starship, id);
  }
}
