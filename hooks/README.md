# Exercims
 
1-Leap 
import React, { useState } from 'react';

const isDivisibleBy = (number: number, divisor: number): boolean => {
  return number % divisor === 0;
}

const isLeap = (year: number): boolean => {
  return isDivisibleBy(year, 400) || (!isDivisibleBy(year, 100) && isDivisibleBy(year, 4));
}

const LeapYearCalculator: React.FC = () => {
  const [year, setYear] = useState<number>(0);
  const [isLeapYear, setIsLeapYear] = useState<boolean | null>(null);

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(Number(e.target.value));
  };

  const checkLeapYear = () => {
    setIsLeapYear(isLeap(year));
  };

  return (
    <div>
      <h1>Leap Year Calculator</h1>
      <label>
        Year:
        <input type="number" value={year} onChange={handleYearChange} />
      </label>
      <button onClick={checkLeapYear}>Check Leap Year</button>
      {isLeapYear !== null && (
        <p>The year {year} is {isLeapYear ? '' : 'not '}a leap year.</p>
      )}
    </div>
  );
};

export default LeapYearCalculator;


Explicacion que hace cada linea 

import React, { useState } from 'react';: Esta línea importa el módulo React y la función useState desde la biblioteca react. useState es un Hook que te permite añadir el estado de React a los componentes de función.
const isDivisibleBy = (number: number, divisor: number): boolean => {...};: Esta es una función que verifica si un número es divisible por otro número. Devuelve true si el número es divisible y false en caso contrario.
const isLeap = (year: number): boolean => {...};: Esta es una función que verifica si un año es bisiesto. Un año es bisiesto si es divisible por 400 o si no es divisible por 100 pero es divisible por 4.
const LeapYearCalculator: React.FC = () => {...};: Aquí se declara el componente LeapYearCalculator. Este es un componente funcional de React.
const [year, setYear] = useState<number>(0);: Aquí se declara un estado llamado year y su función de actualización setYear. El estado inicial es 0.
const [isLeapYear, setIsLeapYear] = useState<boolean | null>(null);: Aquí se declara otro estado llamado isLeapYear y su función de actualización setIsLeapYear. El estado inicial es null.
const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {...};: Esta es una función de manejo de eventos que se activa cuando se introduce un nuevo año. Actualiza el estado year con el nuevo valor.
const checkLeapYear = () => {...};: Esta es una función que verifica si el año actual es bisiesto y actualiza el estado isLeapYear con el resultado.
return (...): Esta parte del código devuelve el JSX que se renderizará en la página. Contiene un formulario para introducir un año y un botón para verificar si el año es bisiesto. También muestra si el año es bisiesto o no.



2-RNA Transcription

import React, { useState } from 'react';

const toRna = (strand: string): string => {
  let transcribed: string = '';
  const mapper = new Map<string, string>([
      ["G", "C"],
      ["C", "G"],
      ["T", "A"],
      ["A", "U"],
  ]);
  for (var i = 0; i < strand.length; i++) {
      if (!mapper.has(strand.charAt(i))) throw new Error('Invalid input DNA.');
      transcribed = transcribed + mapper.get(strand.charAt(i));
  }
  return transcribed;
}

const DNAToRNATranscriber: React.FC = () => {
  const [dna, setDna] = useState<string>('');
  const [rna, setRna] = useState<string>('');

  const handleDnaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDna(e.target.value);
  };

  const transcribeDnaToRna = () => {
    try {
      const transcribedRna = toRna(dna);
      setRna(transcribedRna);
    } catch (error) {
      if (error instanceof Error) {
      alert(error.message);
    }else {

    }
  }
  };

  return (
    <div>
      <h1>DNA to RNA Transcriber</h1>
      <label>
        DNA Strand:
        <input type="text" value={dna} onChange={handleDnaChange} />
      </label>
      <button onClick={transcribeDnaToRna}>Transcribe</button>
      {rna && (
        <p>Transcribed RNA Strand: {rna}</p>
      )}
    </div>
  );
};

export default DNAToRNATranscriber;



Explicacion de que hace cada linea 

import React, { useState } from 'react';: Esta línea importa el módulo React y la función useState desde la biblioteca react. useState es un Hook que te permite añadir el estado de React a los componentes de función.
const toRna = (strand: string): string => {...};: Esta es una función que transcribe una cadena de ADN a ARN. Recorre cada carácter de la cadena de entrada y lo reemplaza con su correspondiente en ARN utilizando un mapa. Si encuentra un carácter que no está en el mapa, lanza un error.
const DNAToRNATranscriber: React.FC = () => {...};: Aquí se declara el componente DNAToRNATranscriber. Este es un componente funcional de React.
const [dna, setDna] = useState<string>('');: Aquí se declara un estado llamado dna y su función de actualización setDna. El estado inicial es una cadena vacía.
const [rna, setRna] = useState<string>('');: Aquí se declara otro estado llamado rna y su función de actualización setRna. El estado inicial es una cadena vacía.
const handleDnaChange = (e: React.ChangeEvent<HTMLInputElement>) => {...};: Esta es una función de manejo de eventos que se activa cuando se introduce una nueva cadena de ADN. Actualiza el estado dna con la nueva cadena.
const transcribeDnaToRna = () => {...};: Esta es una función que intenta transcribir la cadena de ADN a ARN utilizando la función toRna. Si la función toRna lanza un error, muestra una alerta con el mensaje de error.
return (...): Esta parte del código devuelve el JSX que se renderizará en la página. Contiene un formulario para introducir una cadena de ADN y un botón para transcribir la cadena a ARN. También muestra la cadena de ARN transcrita.
export default DNAToRNATranscriber;: Esta línea exporta el componente DNAToRNATranscriber como exportación por defecto del módulo. Esto permite importar DNAToRNATranscriber en otros módulos usando import DNAToRNATranscriber from './DNAToRNATranscriber';.

Link video:https://youtu.be/cm1Kr5VZsEE?si=yw90w-6voIAp4ES4