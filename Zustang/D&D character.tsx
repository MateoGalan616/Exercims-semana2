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
