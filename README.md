# Exercims
 
1-two fer
import React from 'react';

const TwoFer = ({ name }: { name string }): JSX.Element  {

return ( <div> One for {name  'you'}, one for me.  div> );

};

export default TwoFer;
Esta línea importa el módulo react , que es necesario para utilizar React en tu aplicación.
React es una biblioteca de JavaScript para construir interfaces de usuario.
Aquí se define un componente de función llamado TwoFer . TwoFer toma una prop
opcional llamada name , que es de tipo string o puede ser undefined . La notación
indica que la prop name es opcional. JSX.Element indica que el componente devuelve un
elemento JSX.
Esta parte del código define el contenido del componente TwoFer . Es un bloque de
retorno que devuelve un elemento JSX ( <div> ) que contiene el mensaje "One for {name
|| 'you'}, one for me.". La expresión {name  'you'} significa que si name está definido y
no es una cadena vacía, se usará ese valor; de lo contrario, se usará 'you'.
Esto cierra la definición del componente de función TwoFer .
Esta línea exporta el componente TwoFer , lo que significa que otros módulos pueden
importarlo y utilizarlo en su código.
En resumen, el código define un componente de función de React llamado TwoFer , que toma
un nombre opcional como prop y muestra un mensaje en un <div> . Luego, exporta este
componente para que pueda ser utilizado en otros archivos de la aplicación.



2-resistor color
export const COLORS = [ 'black', 'brown', 'red', 'orange', 'yellow', 'green',
'blue', 'violet', 'grey', 'white', ] as const;
type Colors = typeof COLORS[number];
Por lo tanto, typeof COLORS[number] crea un tipo que es la unión de todos los tipos de
elementos en el array COLORS , lo que significa que Colors será una unión de cadenas
literales con los valores de cada elemento del array.
export const colorCode = (color: Colors)  COLORS.indexOf(color);
export const COLORS : Esta línea declara una constante llamada COLORS y la exporta.
Está compuesta por un array de cadenas que representan nombres de colores.
as const; : El as const al final de la declaración del array le dice a TypeScript que
infiera los tipos literales exactos de los elementos del array. Esto significa que cada
elemento del array se considerará como un tipo de cadena literal en lugar de simplemente
una cadena.
type Colors : Esto define un nuevo tipo llamado Colors .
typeof COLORS : typeof aquí se utiliza para obtener el tipo de la constante COLORS .
[number] : Esto accede al tipo de los elementos del array COLORS .
export const colorCode : Esta línea declara y exporta una función llamada colorCode .
(color: Colors) : Esto define un parámetro color que debe ser de tipo Colors , que es
la unión de todos los valores en COLORS .
 COLORS.indexOf(color) : Esta es la implementación de la función colorCode . Toma
un color como argumento y devuelve el índice de ese color en el array COLORS utilizando
el método indexOf() . Si el color no se encuentra en el array, la función devolverá -1 .