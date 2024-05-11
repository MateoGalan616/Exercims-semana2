# Exercims
 
1-Leap 
import React, { useState } from 'react';

// Función de utilidad
function isDivisibleBy(number, divisor) {
  return number % divisor === 0;
}

// Función para verificar si un año es bisiesto
function isLeap(year) {
  return isDivisibleBy(year, 400) || (!isDivisibleBy(year, 100) && isDivisibleBy(year, 4));
}

// Componente de React
function LeapYearChecker() {
  const [year, setYear] = useState(0);
  const [isLeapYear, setIsLeapYear] = useState(false);

  const checkLeapYear = () => {
    setIsLeapYear(isLeap(year));
  };

  return (
    <div>
      <input type="number" value={year} onChange={e => setYear(e.target.value)} />
      <button onClick={checkLeapYear}>Check if Leap Year</button>
      {isLeapYear ? <p>{year} is a leap year.</p> : <p>{year} is not a leap year.</p>}
    </div>
  );
}
export default LeapYearChecker;


Explicacion que hace cada linea 

import React, { useState } from 'react';

Esta línea importa el módulo React y la función useState desde la biblioteca react. useState es un Hook de React que te permite agregar estado a los componentes funcionales.

function isDivisibleBy(number, divisor) {
  return number % divisor === 0;
}

Esta es una función de utilidad que verifica si un número es divisible por otro. Devuelve true si el número es divisible por el divisor y false en caso contrario.

function isLeap(year) {
  return isDivisibleBy(year, 400) || (!isDivisibleBy(year, 100) && isDivisibleBy(year, 4));
}

Esta función verifica si un año es bisiesto. Un año es bisiesto si es divisible por 400 o si no es divisible por 100 pero sí por 4.

function LeapYearChecker() {
  const [year, setYear] = useState(0);
  const [isLeapYear, setIsLeapYear] = useState(false);

Aquí se define un componente de React llamado LeapYearChecker. Dentro de este componente, se declaran dos estados utilizando el Hook useState: year y isLeapYear. year se inicializa con 0 y isLeapYear con false.

  const checkLeapYear = () => {
    setIsLeapYear(isLeap(year));
  };

Esta es una función que se llama checkLeapYear. Cuando se invoca, actualiza el estado isLeapYear utilizando la función setIsLeapYear, pasándole el resultado de la función isLeap(year).

  return (
    <div>
      <input type="number" value={year} onChange={e => setYear(e.target.value)} />
      <button onClick={checkLeapYear}>Check if Leap Year</button>
      {isLeapYear ? <p>{year} is a leap year.</p> : <p>{year} is not a leap year.</p>}
    </div>
  );
}

Este es el código JSX que se renderiza para el componente LeapYearChecker. Contiene un campo de entrada para el año, un botón para verificar si el año es bisiesto y un párrafo que muestra si el año es bisiesto o no.

export default LeapYearChecker;

Finalmente, el componente LeapYearChecker se exporta como el export por defecto del módulo. Esto significa que puede ser importado en otros archivos utilizando import LeapYearChecker from './LeapYearChecker';.



2-RNA Transcription

import React, { useState } from 'react';

// Función para transcribir ADN a ARN
function toRna(strand) {
    let transcribed = '';
    const mapper = new Map([
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

// Componente de React
function DnaToRnaTranscriber() {
    const [dna, setDna] = useState('');
    const [rna, setRna] = useState('');

    const transcribeDna = () => {
        try {
            setRna(toRna(dna));
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div>
            <input type="text" value={dna} onChange={e => setDna(e.target.value)} />
            <button onClick={transcribeDna}>Transcribe DNA</button>
            <p>RNA: {rna}</p>
        </div>
    );
}

export default DnaToRnaTranscriber;

Explicacion de que hace cada linea 

Esta función toRna toma una cadena de ADN (representada por las letras G, C, T, A) y la transcribe en ARN. Para hacer esto, utiliza un Map que mapea cada letra de ADN a su correspondiente en ARN. Luego, recorre cada letra de la cadena de entrada y la reemplaza por su correspondiente en ARN. Si encuentra una letra que no es válida (no es G, C, T, A), lanza un error.

function DnaToRnaTranscriber() {
    const [dna, setDna] = useState('');
    const [rna, setRna] = useState('');

Aquí se define un componente de React llamado DnaToRnaTranscriber. Dentro de este componente, se declaran dos estados utilizando el Hook useState: dna y rna. Ambos se inicializan con una cadena vacía.

    const transcribeDna = () => {
        try {
            setRna(toRna(dna));
        } catch (error) {
            alert(error);
        }
    };

Esta es una función que se llama transcribeDna. Cuando se invoca, intenta transcribir la cadena de ADN en ARN utilizando la función toRna y actualiza el estado rna con el resultado. Si ocurre un error (por ejemplo, si la cadena de ADN es inválida), muestra una alerta con el mensaje de error.

    return (
        <div>
            <input type="text" value={dna} onChange={e => setDna(e.target.value)} />
            <button onClick={transcribeDna}>Transcribe DNA</button>
            <p>RNA: {rna}</p>
        </div>
    );
}

Este es el código JSX que se renderiza para el componente DnaToRnaTranscriber. Contiene un campo de entrada para la cadena de ADN, un botón para transcribir la cadena de ADN en ARN y un párrafo que muestra la cadena de ARN resultante.

export default DnaToRnaTranscriber;

Finalmente, el componente DnaToRnaTranscriber se exporta como el export por defecto del módulo. Esto significa que puede ser importado en otros archivos utilizando import DnaToRnaTranscriber from './DnaToRnaTranscriber';.

Link video: https://youtu.be/u3f3lOL0--A?si=N-UkkI_byS_ru_iS