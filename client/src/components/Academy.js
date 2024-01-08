import React from 'react';

const Academy = ({ name, link, fields }) => {
    return (
        <div className="academy">
            <h2>{name}</h2>
            <p>Link: <a href={link} target="_blank" rel="noopener noreferrer">{link}</a></p>
            <p>Kierunki: {fields.join(', ')}</p>
            <hr />
        </div>
    );
};

export default Academy;
