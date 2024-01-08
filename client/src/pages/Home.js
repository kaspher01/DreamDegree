import React, { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        // Add the class when the component mounts
        document.body.classList.add('home-body');

        // Remove the class when the component unmounts
        return () => {
            document.body.classList.remove('home-body');
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

    return (
        <div className="card">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <h1>Gotowy wybrać swoja przyszłość?</h1>
            <p>karier jest wiele i tak pewnie bedziesz niewolnikiem</p>
            <p>Ale może wybierzesz dobrze i uciekniesz z matrixa ;)</p>
        </div>
    );
};

export default Home;