export default class SwapiService {

  _apiBase = 'https://swapi.co/api';

  async getResourcre(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }

    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResourcre(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResourcre(`/people/${id}/`);
  }

  async getAllPlanets() {
    const res = await this.getResourcre(`/planets/`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResourcre(`/planets/${id}/`);
  }

  async getAllStarhips() {
    const res = await this.getResourcre(`/starships/`);
    return res.results;
  }

  getStarship(id) {
    return this.getResourcre(`/starships/${id}/`);
  }
}

const swapi = new SwapiService();

swapi.getAllStarhips().then((starships) => {
  starships.forEach((starship) => {
    console.log(starship.name);
  });
});