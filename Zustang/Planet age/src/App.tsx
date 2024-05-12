import React, { useState } from 'react';

type Planets = 'mercury' | 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune';
const factors: { [key in Planets]: number } = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
};

const PlanetAgeCalculator: React.FC = () => {
  const [planet, setPlanet] = useState<Planets>('earth');
  const [seconds, setSeconds] = useState<number>(0);

  const handlePlanetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlanet(e.target.value as Planets);
  };

  const handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeconds(Number(e.target.value));
  };

  const calculateAge = (): number => +(seconds / (31557600 * factors[planet])).toFixed(2);

  return (
    <div>
      <h1>Planet Age Calculator</h1>
      <label>
        Planet:
        <select value={planet} onChange={handlePlanetChange}>
          {Object.keys(factors).map((planet) => (
            <option key={planet} value={planet}>{planet.charAt(0).toUpperCase() + planet.slice(1)}</option>
          ))}
        </select>
      </label>
      <label>
        Seconds:
        <input type="number" value={seconds} onChange={handleSecondsChange} />
      </label>
      <p>Your age on {planet.charAt(0).toUpperCase() + planet.slice(1)} is {calculateAge()} years.</p>
    </div>
  );
};

export default PlanetAgeCalculator;
