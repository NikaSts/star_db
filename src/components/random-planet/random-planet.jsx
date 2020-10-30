import React, { useState, useEffect } from 'react';
import { Spinner, ErrorMessage } from '../../components';
import { getPlanetById } from '../../api/api';
import {
  getRandomNumber, TOTAL_PLANETS_COUNT, imageEndPoint, Type,
} from '../../utils';
import './random-planet.css';

const RandomPlanet = () => {

  const [planet, setPlanet] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const onPlanetLoaded = (loadedPlanet) => {
    setPlanet(loadedPlanet);
    setLoading(false);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  const updatePlanet = () => {
    const id = getRandomNumber(1, TOTAL_PLANETS_COUNT); getPlanetById(id)
      .then(onPlanetLoaded)
      .catch(onError);
  };

  useEffect(() => {
    updatePlanet();
    const updateInterval = setInterval(updatePlanet, 10000);
    return () => {
      clearInterval(updateInterval);
    };
  }, []);

  return (
    <section className="random-planet d-flex bg-dark ">
      {error ? <ErrorMessage /> : null}
      {loading ? <Spinner /> : null}
      {!(loading || error) ? <Planet planet={planet} /> : null}
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
