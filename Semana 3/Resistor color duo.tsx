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