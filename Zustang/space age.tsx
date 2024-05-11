import React from 'react';

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

const age = (planet: Planets, seconds: number): number => +(seconds / (31557600 * factors[planet])).toFixed(2);

const PlanetAge: React.FC<{ planet: Planets; seconds: number }> = ({ planet, seconds }) => {
    return (
        <div>
            La edad en {planet} es {age(planet, seconds)} años terrestres.
        </div>
    );
};

export default PlanetAge;
