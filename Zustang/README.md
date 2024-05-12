# Exercims
 
 1-space age 
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


Explicacion de que hace cada linea 

import React, { useState } from 'react';: Esta línea importa el módulo React y la función useState desde la biblioteca react. useState es un Hook que te permite añadir el estado de React a los componentes de función.
type Planets = 'mercury' | 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune';: Aquí se declara un tipo llamado Planets que puede ser cualquiera de los nombres de los planetas listados.
const factors: { [key in Planets]: number } = {...};: Aquí se declara un objeto que mapea el nombre de cada planeta a su factor de conversión de edad en años terrestres.
const PlanetAgeCalculator: React.FC = () => {...};: Aquí se declara el componente PlanetAgeCalculator. Este es un componente funcional de React.
const [planet, setPlanet] = useState<Planets>('earth');: Aquí se declara un estado llamado planet y su función de actualización setPlanet. El estado inicial es 'earth'.
const [seconds, setSeconds] = useState<number>(0);: Aquí se declara otro estado llamado seconds y su función de actualización setSeconds. El estado inicial es 0.
const handlePlanetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {...};: Esta es una función de manejo de eventos que se activa cuando se selecciona un nuevo planeta en el menú desplegable. Actualiza el estado planet con el nuevo valor.
const handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {...};: Esta es una función de manejo de eventos que se activa cuando se introduce una nueva cantidad de segundos. Actualiza el estado seconds con el nuevo valor.
const calculateAge = (): number => {...};: Esta es una función que calcula la edad en años terrestres basándose en la cantidad de segundos y el factor de conversión del planeta seleccionado.
return (...): Esta parte del código devuelve el JSX que se renderizará en la página. Contiene un formulario para seleccionar un planeta e introducir una cantidad de segundos, y muestra la edad calculada en años terrestres.
export default PlanetAgeCalculator;: Esta línea exporta el componente PlanetAgeCalculator como exportación por defecto del módulo. Esto permite importar PlanetAgeCalculator en otros módulos usando import PlanetAgeCalculator from './PlanetAgeCalculator';.



 2- D&D character
ahora de este 
import React, { useState } from 'react';

type DiceResult = [number, number, number, number];

const randomGenerator = (min:number, max:number) => {
  return Math.floor(Math.random() * (max-min +1)) + min;
}

const generateAbilityScore = (): number => {
  let diceResult:DiceResult = [0,0,0,0];
  
  for (let i=0; i<4; i++) {
    diceResult[i] = randomGenerator(1, 6);
  }
  
  const justThree:number[] = diceResult.sort().slice(1);
  
  let result:number = 0;
  justThree.forEach(n => result += n);
  
  return result;
}

const getModifierFor = (abilityValue: number): number => {
  return Math.floor((abilityValue - 10)/2);
}

const DnDCharacter: React.FC = () => {
  const [character, setCharacter] = useState({
    strength: generateAbilityScore(),
    dexterity: generateAbilityScore(),
    constitution: generateAbilityScore(),
    intelligence: generateAbilityScore(),
    wisdom: generateAbilityScore(),
    charisma: generateAbilityScore(),
  });

  const hitpoints = 10 + getModifierFor(character.constitution);

  return (
    <div>
      <h1>D&D Character Generator</h1>
      <p>Strength: {character.strength}</p>
      <p>Dexterity: {character.dexterity}</p>
      <p>Constitution: {character.constitution}</p>
      <p>Intelligence: {character.intelligence}</p>
      <p>Wisdom: {character.wisdom}</p>
      <p>Charisma: {character.charisma}</p>
      <p>Hit Points: {hitpoints}</p>
    </div>
  );
};

export default DnDCharacter;

explicacion de que hace cada linea 

import React, { useState } from "react";: Esta línea importa el módulo React y la función useState desde la biblioteca react. useState es un Hook que te permite añadir el estado de React a los componentes de función.
const rollDice = (): number => Math.floor(Math.random() * 6) + 1;: Esta es una función que genera un número aleatorio entre 1 y 6, simulando el lanzamiento de un dado.
const generateAbilityScore = (): number => {...};: Esta función genera una puntuación de habilidad para un personaje de D&D. Lanza un dado cuatro veces, descarta el resultado más bajo y suma los tres restantes.
const calculateConstitutionModifier = (constitution: number): number => {...};: Esta función calcula el modificador de constitución de un personaje basándose en su puntuación de constitución.
const calculateHitPoints = (constitutionModifier: number): number => {...};: Esta función calcula los puntos de golpe de un personaje basándose en su modificador de constitución.
const generateCharacter = (): Record<string, number> => {...};: Esta función genera un personaje de D&D con puntuaciones de habilidad aleatorias y calcula su modificador de constitución y puntos de golpe.
const CharacterGenerator: React.FC = () => {...};: Aquí se declara el componente CharacterGenerator. Este es un componente funcional de React.
const [character, setCharacter] = useState<Record<string, number> | null>(null);: Aquí se declara un estado llamado character y su función de actualización setCharacter. El estado inicial es null.
const generateNewCharacter = () => {...};: Esta función genera un nuevo personaje y actualiza el estado character con el nuevo personaje.
return (...): Esta parte del código devuelve el JSX que se renderizará en la página. Contiene un botón para generar un nuevo personaje y muestra las puntuaciones de habilidad del personaje generado.
export default CharacterGenerator;: Esta línea exporta el componente CharacterGenerator como exportación por defecto del módulo. Esto permite importar CharacterGenerator en otros módulos usando import CharacterGenerator from './CharacterGenerator';

Link video:https://youtu.be/HgZ0bN2xj4Q?si=httmAUn8p9evp2bF