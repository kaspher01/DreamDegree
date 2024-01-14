const Academy = ({ id, name, link, fields, token, favourites, onFavouritesButtonChanged }) => {

    const handleButtonClick = () => {
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    const addToFavourites = async () => {
        fetch('http://localhost:3001/api/addToFavourites', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( {id_user: token.userId, id_academy: id})
        })
            .then(response => {
                if (response.ok) {
                    onFavouritesButtonChanged(id);
                }
            })
            .catch(error => console.log(error));
    }

    const deleteFromFavourites = async () => {
        fetch('http://localhost:3001/api/deleteFromFavourites', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( {id_user: token.userId, id_academy: id})
        })
            .then(response => {
                if (response.ok) {
                    onFavouritesButtonChanged(id);
                }
            })
            .catch(error => console.log(error));
    }

    const updateFavouritesButton = () => {
        if (favourites.find((academy) => academy.id_academy === id)) {
            return (
                <button onClick={deleteFromFavourites}>Usuń z ulubionych</button>
            )
        }

        return (
            <button onClick={addToFavourites}>Dodaj do ulubionych</button>
        )
    }

    return (
        <div className="academy">
            <h2>{name}</h2>
            <button onClick={handleButtonClick}>Strona uczelni</button>
            {token ? updateFavouritesButton() : null}
            <p> {fields.join(' | ')}</p>
            <hr />
        </div>
    );
};

export default Academy;