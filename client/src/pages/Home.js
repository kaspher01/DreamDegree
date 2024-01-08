import React, { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.body.classList.add('home-body');

        return () => {
            document.body.classList.remove('home-body');
        };
    }, []);

    return (
        <div className="box">

            <h1>Gotowy wybrać swoja przyszłość?</h1>
            <p>karier jest wiele i tak pewnie bedziesz niewolnikiem</p>
            <p>Ale może wybierzesz dobrze i uciekniesz z matrixa ;)</p>
        </div>
    );
};

export default Home;