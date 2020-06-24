import React, { Component } from 'react';
import './random-planet.css';
import API from '../../api/api';
import Spinner from '../spinner';
import ErrorMessage from '../error-message';
import { getRandomNumber, TOTAL_PLANETS_COUNT, IMAGE_END_POINT } from '../../utils';

export default class RandomPlanet extends Component {
  constructor() {
    super();
    this.state = {
      planet: {},
      loading: true,
      error: false,
    };
    this.api = new API();
    this.updatePlanet = this.updatePlanet.bind(this);
    this.onPlanetLoaded = this.onPlanetLoaded.bind(this);
    this.onError = this.onError.bind(this);

    this.updatePlanet();
  }

  onError() {
    this.setState({
      error: true,
      loading: false,
    });
  }

  onPlanetLoaded(planet) {
    this.setState({
      planet,
      loading: false,
    });
  }

  updatePlanet() {
    const id = getRandomNumber(0, TOTAL_PLANETS_COUNT);
    this.api
      .getPlanetById(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const { planet, loading, error } = this.state;

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const hasData = !(loading || error);
    const content = hasData ? <Planet planet={planet} /> : null;

    return (
      <section className="random-planet d-flex bg-dark ">
        {errorMessage}
        {spinner}
        {content}
      </section>
    );
  }
}

const Planet = ({ planet }) => {
  const {
    id, name, population, rotationPeriod, diameter,
  } = planet;

  return (
    <>
      <div className="random-planet_description">
        <h2 className="visually-hidden">{name}</h2>
        <table>
          <tbody>
            <tr>
              <td className="term">Population</td>
              <td>{population}</td>
            </tr>
            <tr>
              <td className="term">Rotation Period</td>
              <td>{rotationPeriod}</td>
            </tr>
            <tr>
              <td className="term">Diameter</td>
              <td>{diameter}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <img src={`${IMAGE_END_POINT}${id}.jpg`} alt={`Planet ${name}`} width="120" height="120" />
    </>
  );
};
