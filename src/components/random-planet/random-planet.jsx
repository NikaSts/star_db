import React, { Component } from 'react';
import API from '../../api/api';
import Spinner from '../spinner';
import ErrorMessage from '../error-message';
import { getRandomNumber, TOTAL_PLANETS_COUNT, ImageEndPoint } from '../../utils';
import './random-planet.css';


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
  }

  componentDidMount() {
    this.updatePlanet();
  }

  onError() {
    this.setState({
      loading: false,
      error: true,
    });
  }

  onPlanetLoaded(planet) {
    this.setState({
      planet,
      loading: false,
    });
  }

  updatePlanet() {
    const id = getRandomNumber(1, TOTAL_PLANETS_COUNT);
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
      <div>
        <h2>{name}</h2>
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
      <img src={`${ImageEndPoint.PLANET}${id}.jpg`} alt={`Planet ${name}`} width="120" height="120" />
    </>
  );
};
