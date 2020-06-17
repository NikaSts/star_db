import React, { Component } from 'react';
import './random-planet.css';
import API from '../../api/api';
import Spinner from '../spinner';
import { getRandomNumber, TOTAL_PLANETS_COUNT, IMAGE_END_POINT } from '../../utils';

export default class RandomPlanet extends Component {
  constructor() {
    super();
    this.state = {
      planet: {},
      loading: true,
    };
    this.api = new API();
    this.updatePlanet();
  }

  updatePlanet() {
    const id = getRandomNumber(0, TOTAL_PLANETS_COUNT);
    this.api
      .getPlanetById(id)
      .then((planet) => this.setState({
        planet,
        loading: false,
      }));
  }

  render() {
    const { planet, loading } = this.state;
    const content = loading ? <Spinner /> : <Planet planet={planet} />;

    return (
      <section className="random-planet d-flex bg-dark ">
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
