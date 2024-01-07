import React from 'react';

const Academy = ({ _id, name, link }) => {
    return (
        <div className="academy">
            <h2>{name}</h2>
            <p>Dowiedz się więcej: {link}</p>
        </div>
    );
};

export default Academy;
