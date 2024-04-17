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
