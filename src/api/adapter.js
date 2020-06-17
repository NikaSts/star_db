export const transformPlanet = (planet, id) => ({
  id,
  name: planet.name,
  population: planet.population,
  rotationPeriod: planet.rotation_period,
  diameter: planet.diameter,
});

export const transformPerson = (person, id) => ({
  id,
  name: person.name,
  gender: person.gender,
  birthYear: person.birth_year,
  eyeColor: person.eye_color,
});

export const transformStarship = (starship, id) => ({
  id,
  name: starship.name,
  model: starship.model,
  manufacturer: starship.manufacturer,
  costInCredits: starship.cost_in_credits,
  length: starship.length,
  crew: starship.crew,
  passengers: starship.passengers,
  cargoCapacity: starship.cargo_capacity,
});
