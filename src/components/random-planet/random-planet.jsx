import React from 'react';
import './random-planet.css';

const RandomPlanet = () => {
  return (
    <section className="random-planet d-flex bg-dark ">
      <div className="random-planet_description">
        <h2 className="visually-hidden">Planet title</h2>
        <table>
          <tr>
            <td className="term">Population</td>
            <td>100</td>
          </tr>
          <tr>
            <td className="term">Rotation Period</td>
            <td>10</td>
          </tr>
          <tr>
            <td className="term">Diameter</td>
            <td>500</td>
          </tr>
        </table>
      </div>
      <img src="" alt="" width="120" height="120" />
    </section>
 )
}

export default RandomPlanet;
