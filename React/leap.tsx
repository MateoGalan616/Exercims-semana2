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