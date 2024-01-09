import React from 'react';

const Academy = ({ name, link, fields }) => {
    const handleButtonClick = () => {
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="academy">
            <h2>{name}</h2>
            <button onClick={handleButtonClick}>Strona uczelni</button>
            <p> {fields.join(' | ')}</p>
            <hr />
        </div>
    );
};

export default Academy;