import React from 'react';

export function twoFer(name?: string): string {
    return `One for ${name || "you"}, one for me.`;
}

const TwoFerComponent = ({ name }) => {
    return (
        <div>
            {twoFer(name)}
        </div>
    );
};

export default TwoFerComponent;
