import {useEffect, useState} from "react";
import useToken from "../components/LoginComponent/UseToken";
import Academy from "../components/Academy";

const FavouritesPage = () => {
    const [favourites, setFavourites] = useState([]);
    const [academies, setAcademies] = useState([]);
    const [fields, setFields] = useState([]);
    const [academiesFields, setAcademiesFields] = useState([]);
    const [favouritesButton, setFavouritesButton] = useState('');

    const { token, setToken } = useToken();

    useEffect(() => {

        Promise.all([
            fetch('http://localhost:3001/api/academies').then((response) => response.json()),
            fetch('http://localhost:3001/api/favourites?' + new URLSearchParams({ userId: token.userId })).then((response) => response.json()),
            fetch('http://localhost:3001/api/fields').then((response) => response.json()),
            fetch('http://localhost:3001/api/academiesFields').then((response) => response.json())

        ])
            .then(([academiesData, favouritesData, fieldsData, academiesFieldsData]) => {
                setAcademies(academiesData);
                setFavourites(favouritesData);
                setFields(fieldsData);
                setAcademiesFields(academiesFieldsData);
            })
            .catch((error) => console.error('Error fetching data:', error));
     }, [favouritesButton]);

    const onFavouritesButtonChange = (newFavouritesButton) => {
        setFavouritesButton(newFavouritesButton);
    }

    const getAcademy = (academyId) => {
        const academy = academies.find(academy => academy.id_academy = academyId);

        return (
            <Academy
                key={academy.id_academy}
                id={academy.id_academy}
                name={academy.name}
                link={academy.link}
                fields={getAcademyFields(academy.id_academy)}
                token={token}
                favourites={favourites}
                onFavouritesButtonChanged={onFavouritesButtonChange}
            ></Academy>
        )
    }

    const getAcademyFields = (academyId) => {
        const associatedFields = academiesFields.filter((field) => field.id_academy === academyId);
        return associatedFields.map((field) => {
            const fieldInfo = fields.find((f) => f.id_field_of_study === field.id_field_of_study);
            return fieldInfo ? fieldInfo.name : '';
        }).sort();
    };

    return (
        <>
            <div>
                <h1>Ulubione Uczelnie</h1>
            </div>
            {favourites.map(favouriteAcademy => (
                getAcademy(favouriteAcademy.id_academy)
            ))}
        </>
    )
}
export default FavouritesPage;