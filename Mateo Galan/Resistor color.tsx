import React from 'react';

export const COLORS = [
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
type Colors = typeof COLORS[number];
export const colorCode = (color: Colors) => COLORS.indexOf(color);

const ColorCodeComponent = ({ color }: { color: Colors }) => {
    return (
        <div>
            The color code of {color} is {colorCode(color)}.
        </div>
    );
};

export default ColorCodeComponent;
