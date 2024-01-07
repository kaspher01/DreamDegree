import { Field, Form, Formik, ErrorMessage } from "formik";
import ReactDOM from 'react-dom/client';
import * as Yup from "yup";
import 'bootstrap/dist/css/bootstrap.css';
import './RegistrationForm.css';

export const RegistrationForm = () => {
    const initialValues = {
        name: "",
        surname: "",
        email: "",
        password: ""
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Pole wymagane"),
        surname: Yup.string().required("Pole wymagane"),
        email: Yup.string()
            .matches(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "Wpisany email nie jest poprawny"
            )
            .required("Pole wymagane"),
        password: Yup.string().required("Pole wymagane")
    });

    const onSubmit = async (formValues) => {

        fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formValues)
        })
            .then((response) => {
                if (response.ok) {
                    console.log('sss')
                    const form = ReactDOM.createRoot(document.getElementById("registration-form"));
                    form.render(<div>Zarejestrowano pomyślnie. Za chwilę zostaniesz przekierowany na stronę logowania.</div>);
                    setTimeout(() => {
                        window.location.replace('https://google.com');
                    }, 2500);
                }
            })
            .catch(error => console.error(error));
    }


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(formValues) => onSubmit(formValues)}
        >
            { (props) => {
                return (
                    <Form className="registration-form" id="registration-form">
                        <div>
                            <label htmlFor="name">Imię</label>
                            <Field type="text" id="name" value={props.values.name} className="form-control"/>
                            <ErrorMessage name="name">
                                {(errorMessage) => <div className="text-danger">{errorMessage}</div>}
                            </ErrorMessage>
                        </div>
                        <div>
                            <label htmlFor="surname">Nazwisko</label>
                            <Field type="text" id="surname" value={props.values.surname} className="form-control"/>
                            <ErrorMessage name="surname">
                                {(errorMessage) => <div className="text-danger">{errorMessage}</div>}
                            </ErrorMessage>
                        </div>
                        <div>
                            <label htmlFor="email">E-mail</label>
                            <Field type="text" id="email" value={props.values.email} className="form-control"/>
                            <ErrorMessage name="email">
                                {(errorMessage) => <div className="text-danger">{errorMessage}</div>}
                            </ErrorMessage>
                        </div>
                        <div>
                            <label htmlFor="password">Hasło</label>
                            <Field type="password" id="password" value={props.values.password} className="form-control"/>
                            <ErrorMessage name="password">
                                {(errorMessage) => <div className="text-danger">{errorMessage}</div>}
                            </ErrorMessage>
                        </div>
                        <button type="submit" className="btn btn-primary custom-button">Zarejestruj się</button>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default RegistrationForm;