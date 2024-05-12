Space-Age

import React, { useState } from 'react';

const planetOrbitalPeriods: Record<string, number> = {
  Mercury: 0.2408467, Venus: 0.61519726, Earth: 1.0, Mars: 1.8808158,
  Jupiter: 11.862615, Saturn: 29.447498, Uranus: 84.016846, Neptune: 164.79132,
};

const secondsInEarthYear: number = 31557600;

const App = () => {
  const [ageInSeconds, setAgeInSeconds] = useState<number>(0);
  const [selectedPlanet, setSelectedPlanet] = useState<string>('Earth');
  
  const calculateAge = (): string => ((ageInSeconds / secondsInEarthYear) / planetOrbitalPeriods[selectedPlanet]).toFixed(2);
  
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => setAgeInSeconds(parseInt(e.target.value));
  const handlePlanetChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedPlanet(e.target.value);

  return (
    <div>
      <h1>Age Calculator</h1>
      <label>Age in Seconds: <input type="number" value={ageInSeconds} onChange={handleAgeChange} /></label>
      <label>Select Planet:
        <select value={selectedPlanet} onChange={handlePlanetChange}>
          {Object.keys(planetOrbitalPeriods).map(planet => <option key={planet} value={planet}>{planet}</option>)}
        </select>
      </label>
      <p>Age on {selectedPlanet}: {calculateAge()} Earth-years old</p>
    </div>
  );
};

export default App;

Explicacion de que hace cada linea 

import React, { useState } from 'react';: Esta línea importa el módulo React y la función useState desde la biblioteca react. useState es un Hook que te permite añadir el estado de React a los componentes de función.
const planetOrbitalPeriods: Record<string, number> = {...};: Aquí se declara un objeto que mapea el nombre de cada planeta a su período orbital en años terrestres.
const secondsInEarthYear: number = 31557600;: Esta línea declara una constante que representa el número de segundos en un año terrestre.
const App = () => {...};: Aquí se declara el componente App. Este es un componente funcional de React.
const [ageInSeconds, setAgeInSeconds] = useState<number>(0);: Aquí se declara un estado llamado ageInSeconds y su función de actualización setAgeInSeconds. El estado inicial es 0.
const [selectedPlanet, setSelectedPlanet] = useState<string>('Earth');: Aquí se declara otro estado llamado selectedPlanet y su función de actualización setSelectedPlanet. El estado inicial es 'Earth'.
const calculateAge = (): string => {...};: Esta es una función que calcula la edad en años terrestres basándose en la edad en segundos y el período orbital del planeta seleccionado.
const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {...};: Esta es una función de manejo de eventos que se activa cuando el valor del campo de entrada de la edad cambia. Actualiza el estado ageInSeconds con el nuevo valor.
const handlePlanetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {...};: Esta es una función de manejo de eventos que se activa cuando se selecciona un nuevo planeta en el menú desplegable. Actualiza el estado selectedPlanet con el nuevo valor.
return (...): Esta parte del código devuelve el JSX que se renderizará en la página. Contiene un formulario para introducir la edad en segundos y seleccionar un planeta, y muestra la edad calculada en años terrestres.
export default App;: Esta línea exporta el componente App como exportación por defecto del módulo. Esto permite importar App en otros módulos usando import App from './App';.

Character D&D
import React, { useState } from "react";

const rollDice = (): number => Math.floor(Math.random() * 6) + 1;

const generateAbilityScore = (): number => {
  const diceThrows = [rollDice(), rollDice(), rollDice(), rollDice()];
  diceThrows.sort((a, b) => b - a);
  return diceThrows[0] + diceThrows[1] + diceThrows[2];
};

const calculateConstitutionModifier = (constitution: number): number =>
  Math.floor((constitution - 10) / 2);

const calculateHitPoints = (constitutionModifier: number): number =>
  10 + constitutionModifier;

const generateCharacter = (): Record<string, number> => {
  const abilities = [
    "Strength",
    "Dexterity",
    "Constitution",
    "Intelligence",
    "Wisdom",
    "Charisma",
  ];
  const character: Record<string, number> = {};

  abilities.forEach((ability) => {
    character[ability] = generateAbilityScore();
  });

  const constitution = character["Constitution"];
  const constitutionModifier = calculateConstitutionModifier(constitution);
  character["Constitution Modifier"] = constitutionModifier;
  character["Hit Points"] = calculateHitPoints(constitutionModifier);

  return character;
};

const CharacterGenerator: React.FC = () => {
  const [character, setCharacter] = useState<Record<string, number> | null>(
    null
  );

  const generateNewCharacter = () => {
    const newCharacter = generateCharacter();
    setCharacter(newCharacter);
  };

  return (
    <div>
      <h1>D&D Character Generator</h1>
      <button onClick={generateNewCharacter}>Generate Character</button>
      {character && (
        <div>
          <h2>Generated Character</h2>
          <ul>
            {Object.entries(character).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CharacterGenerator;

Explicacion de que hace cada linea 
import React, { useState } from "react";: Esta línea importa el módulo React y la función useState desde la biblioteca react. useState es un Hook que te permite añadir el estado de React a los componentes de función.
const rollDice = (): number => Math.floor(Math.random() * 6) + 1;: Esta función genera un número aleatorio entre 1 y 6, simulando el lanzamiento de un dado.
const generateAbilityScore = (): number => {...};: Esta función genera una puntuación de habilidad para un personaje de D&D. Lanza un dado cuatro veces, descarta el resultado más bajo y suma los tres restantes.
const calculateConstitutionModifier = (constitution: number): number => {...};: Esta función calcula el modificador de constitución de un personaje basándose en su puntuación de constitución.
const calculateHitPoints = (constitutionModifier: number): number => {...};: Esta función calcula los puntos de golpe de un personaje basándose en su modificador de constitución.
const generateCharacter = (): Record<string, number> => {...};: Esta función genera un personaje de D&D con puntuaciones de habilidad aleatorias y calcula su modificador de constitución y puntos de golpe.
const CharacterGenerator: React.FC = () => {...};: Este es el componente principal de tu aplicación. Genera un nuevo personaje cuando se hace clic en el botón y muestra las puntuaciones de habilidad del personaje.
const [character, setCharacter] = useState<Record<string, number> | null>(null);: Aquí se declara un estado llamado character y su función de actualización setCharacter. El estado inicial es null.
const generateNewCharacter = () => {...};: Esta función genera un nuevo personaje y actualiza el estado character con el nuevo personaje.
return (...): Esta parte del código devuelve el JSX que se renderizará en la página. Contiene un botón para generar un nuevo personaje y muestra las puntuaciones de habilidad del personaje generado.
export default CharacterGenerator;: Esta línea exporta el componente CharacterGenerator como exportación por defecto del módulo. Esto permite importar CharacterGenerator en otros módulos usando import CharacterGenerator from './CharacterGenerator';.

link del video: