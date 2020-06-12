
export default class API {
  constructor(url) {
    this.url = url;
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

  getPersonById(id) {
    return this.getResource(`/people/${id}/`);
  }

  async getAllPlanets() {
    const response = await this.getResource('/planets/');
    return response.result;
  }

  getPlanetById(id) {
    return this.getResource(`/planets/${id}/`);
  }

  async getAllStarships() {
    const response = await this.getResource('/starship/');
    return response.result;
  }

  getStarshipById(id) {
    return this.getResource(`/starship/${id}/`);
  }
}
