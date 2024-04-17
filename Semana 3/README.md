# Exercims
 
Ejercicios de Exercims pasados a react

Resistor Color Dúo
const ColorAry =
 [`black`,
 `brown`,
 `red`,
 `orange`,
 `yellow`,
 `green`,
 `blue`,
 `violet`,
 `grey`,
 `white`,] as const // need "as const" for type Color
// not needed for this exercise, but this will disallow passing e.g. 'pink' to constructor
export type Color = typeof ColorAry[number]
export function decodedValue([band1, band2]: Color[]): number { return (ColorAry.indexOf(band1)
* 10) + ColorAry.indexOf(band2) }

Solución en react

import React from 'react';
const ColorAry = [
 'black',
 'brown',
 'red',
 'orange',
 'yellow',
 'green',
 'blue',
 'violet',
 'grey',
 'white',
] as const;
type Color = typeof ColorAry[number];
const decodedValue = ([band1, band2]: Color[]): number => (ColorAry.indexOf(band1) * 10) +
ColorAry.indexOf(band2);
const ColorDecoder = ({band1, band2}: {band1: Color, band2: Color}) => {
 return (
 <div>
 {`El valor decodificado de los colores ${band1} y ${band2} es ${decodedValue([band1,
band2])}`}
 </div>
 );
};
export default ColorDecoder;

Explicación del funcionamiento

ColorDecoder: Este componente de React toma dos colores como props y muestra el valor
decodificado. El valor decodificado se calcula utilizando la función decodedValue, que toma un
array de dos colores y devuelve un número basado en la posición de los colores en ColorAry. En
otras palabras, este componente decodifica los colores en un número. Por ejemplo, si pasas los
colores ‘red’ y ‘orange’ al componente ColorDecoder, mostrará el valor decodificado de estos
colores, que se calcula como (ColorAry.indexOf('red') * 10) + ColorAry.indexOf('orange').


Resistor Color Trio

export function decodedResistorValue(c:string[]):string {
 const find = (c:string) => {
 const colors:string[] = [
 "black","brown","red","orange","yellow","green","blue","violet","grey","white"
 ];
 return colors.findIndex((item) => item === c);
 }
 let n = (find(c[0]) * 10 + find(c[1]) )* 10 ** find(c[2]);
 let units = "ohms";
 if( n > 1000 ) {
 units = "kiloohms";
 n/=1000;
 }
 return `${n} ${units}`;
}

Solución en react

import React from 'react';
const colors = [
 'black',
 'brown',
 'red',
 'orange',
 'yellow',
 'green',
 'blue',
 'violet',
 'grey',
 'white',
];
const find = (c: string) => colors.findIndex((item) => item === c);
const decodedResistorValue = (c: string[]): string => {
 let n = (find(c[0]) * 10 + find(c[1])) * 10 ** find(c[2]);
 let units = 'ohms';
 if (n > 1000) {
 units = 'kiloohms';
 n /= 1000;
 }
 return `${n} ${units}`;
};
const ResistorDecoder = ({colors}: {colors: string[]}) => {
 return <div>{`El valor decodificado de los colores es ${decodedResistorValue(colors)}`}</div>;
};
export default ResistorDecoder;

Explicación del funcionamiento

ResistorDecoder: Este componente de React toma un array de colores como props y muestra el
valor decodificado del resistor. El valor decodificado se calcula utilizando la
función decodedResistorValue, que toma un array de colores y devuelve un string que
representa el valor del resistor en ohms o kiloohms.
La función decodedResistorValue calcula el valor del resistor utilizando la
fórmula (find(c[0]) * 10 + find(c[1])) * 10 ** find(c[2]), donde find es
una función que devuelve el índice de un color en la lista de colores. Luego, si el valor del resistor
es mayor a 1000, se convierte a kiloohms.
Por ejemplo, si pasas los colores [‘red’, ‘orange’, ‘yellow’] al componente ResistorDecoder,
mostrará el valor decodificado de estos colores, que se calcula como (find('red') * 10 +
find('orange')) * 10 ** find('yellow') ohms o kiloohms.

Link video:https://youtu.be/OwygWgTXaUQ?si=zUT5uJ9oFk3QWW-p