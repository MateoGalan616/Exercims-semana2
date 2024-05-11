# Exercims
 
 1-space age 
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

Explicacion de que hace cada linea 

import React from 'react';

type Planets = 'mercury' | 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune';

Aquí se está importando la biblioteca React y se está definiendo un tipo llamado Planets que puede ser uno de los nombres de los planetas listados.

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

Aquí se está definiendo un objeto factors que mapea cada planeta a un número. Estos números representan los factores de conversión para calcular la edad en diferentes planetas.

const age = (planet: Planets, seconds: number): number => +(seconds / (31557600 * factors[planet])).toFixed(2);

Aquí se define una función age que toma un planeta y una cantidad de segundos, y devuelve la edad en ese planeta. La edad se calcula dividiendo los segundos por el producto de 31557600 (que es el número de segundos en un año terrestre) y el factor de conversión del planeta. El resultado se redondea a dos decimales.

const PlanetAge: React.FC<{ planet: Planets; seconds: number }> = ({ planet, seconds }) => {
    return (
        <div>
            La edad en {planet} es {age(planet, seconds)} años terrestres.
        </div>
    );
};

export default PlanetAge;

Aquí se define un componente de React llamado PlanetAge que toma un planeta y una cantidad de segundos como props, y devuelve un elemento div que muestra la edad en el planeta especificado, en años terrestres.




 2- D&D character
import React, { useState, useEffect } from 'react';

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
    const [strength, setStrength] = useState<number>(generateAbilityScore());
    const [dexterity, setDexterity] = useState<number>(generateAbilityScore());
    const [constitution, setConstitution] = useState<number>(generateAbilityScore());
    const [intelligence, setIntelligence] = useState<number>(generateAbilityScore());
    const [wisdom, setWisdom] = useState<number>(generateAbilityScore());
    const [charisma, setCharisma] = useState<number>(generateAbilityScore());
    const [hitpoints, setHitpoints] = useState<number>(10 + getModifierFor(constitution));

    useEffect(() => {
        setHitpoints(10 + getModifierFor(constitution));
    }, [constitution]);

    return (
        <div>
            <p>Fuerza: {strength}</p>
            <p>Destreza: {dexterity}</p>
            <p>Constitución: {constitution}</p>
            <p>Inteligencia: {intelligence}</p>
            <p>Sabiduría: {wisdom}</p>
            <p>Carisma: {charisma}</p>
            <p>Puntos de golpe: {hitpoints}</p>
        </div>
    );
};

export default DnDCharacter;

explicacion de que hace cada linea 
import React, { useState, useEffect } from 'react';

type DiceResult = [number, number, number, number];

Aquí se está importando la biblioteca React, así como las funciones useState y useEffect de React. También se está definiendo un tipo llamado DiceResult que es una tupla de cuatro números.

const randomGenerator = (min:number, max:number) => {
    return Math.floor(Math.random() * (max-min +1)) + min;
}

Aquí se define una función randomGenerator que toma un mínimo y un máximo, y devuelve un número aleatorio entre esos dos valores.

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

Aquí se define una función generateAbilityScore que genera una puntuación de habilidad para un personaje de Dungeons & Dragons. Primero, se lanza un dado de seis caras cuatro veces. Luego, se descarta el valor más bajo y se suman los tres valores restantes.

const getModifierFor = (abilityValue: number): number => {
    return Math.floor((abilityValue - 10)/2);
}

Aquí se define una función getModifierFor que toma un valor de habilidad y devuelve el modificador de habilidad correspondiente según las reglas de Dungeons & Dragons.

const DnDCharacter: React.FC = () => {
    const [strength, setStrength] = useState<number>(generateAbilityScore());
    const [dexterity, setDexterity] = useState<number>(generateAbilityScore());
    const [constitution, setConstitution] = useState<number>(generateAbilityScore());
    const [intelligence, setIntelligence] = useState<number>(generateAbilityScore());
    const [wisdom, setWisdom] = useState<number>(generateAbilityScore());
    const [charisma, setCharisma] = useState<number>(generateAbilityScore());
    const [hitpoints, setHitpoints] = useState<number>(10 + getModifierFor(constitution));

    useEffect(() => {
        setHitpoints(10 + getModifierFor(constitution));
    }, [constitution]);

    return (
        <div>
            <p>Fuerza: {strength}</p>
            <p>Destreza: {dexterity}</p>
            <p>Constitución: {constitution}</p>
            <p>Inteligencia: {intelligence}</p>
            <p>Sabiduría: {wisdom}</p>
            <p>Carisma: {charisma}</p>
            <p>Puntos de golpe: {hitpoints}</p>
        </div>
    );
};

export default DnDCharacter;

Aquí se define un componente de React llamado DnDCharacter que muestra los valores de fuerza, destreza, constitución, inteligencia, sabiduría, carisma y puntos de golpe generados aleatoriamente para un personaje de Dungeons & Dragons. Los valores se actualizan cada vez que se renderiza el componente.

Link video: https://youtu.be/-uSMfUsMZhQ?si=ex_ZWseOY4SM2uD3