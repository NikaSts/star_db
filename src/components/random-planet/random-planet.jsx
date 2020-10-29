import React, { useState, useEffect } from 'react';
import { getPlanetById } from '../../api/api';
import Spinner from '../spinner';
import ErrorMessage from '../error-message';
import {
  getRandomNumber, TOTAL_PLANETS_COUNT, imageEndPoint, Type,
} from '../../utils';
import './random-planet.css';

const RandomPlanet = () => {

  const [planet, setPlanet] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  let updateInterval = null;

  const onPlanetLoaded = (loadedPlanet) => {
    setPlanet(loadedPlanet);
    setLoading(false);
  };

  const onError = () => {
    setError(true);
  };

  const updatePlanet = () => {
    const id = getRandomNumber(1, TOTAL_PLANETS_COUNT); getPlanetById(id)
      .then(onPlanetLoaded)
      .catch(onError);
  };

  useEffect(() => {
    updatePlanet();
    updateInterval = setInterval(updatePlanet, 50000);
    return () => {
      clearInterval(updateInterval);
    };
  }, []);

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
};

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
      <img src={`${imageEndPoint}/${Type.PLANET}/${id}.jpg`} alt={`Planet ${name}`} width="120" height="120" />
    </>
  );
};

export default RandomPlanet;
