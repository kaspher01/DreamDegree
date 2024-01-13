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
            <h1>Witaj w przyszłości! Twoje Studia, Twój Świat, Nasza Wyszukiwarka.</h1>
            <div className="container">
                <div className="description">
                    <h2>Przeglądaj Uczelnie</h2>
                    <p>Twoje pole gry. Znajdź swoje ulubione uczelnie, jakbyś eksplorował nowe krainy.</p>
                </div>
                <div className="description">
                    <h2>Zakwaterowanie na Miarę</h2>
                    <p>Wybieraj swoje miejsce, jakbyś kształtował własne królestwo.</p>
                </div>
                <div className="description">
                    <h2>Ulubione dla Zalogowanych</h2>
                    <p>Twoja księga zaklęć. Dodawaj uczelnie do ulubionych, zbieraj skarby swojej edukacyjnej przygody.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;