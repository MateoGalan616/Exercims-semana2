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
