import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import PropTypes from 'prop-types';

export const LoginForm = ({ setToken }) => {
    const initialValues = {
        email: "",
        password: ""
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .matches(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "Wpisany email nie jest poprawny"
            )
            .required("Pole wymagane"),
        password: Yup.string().required("Pole wymagane")
    });

    const onSubmit = async (formValues) => {
        const token = await loginUser(formValues);
        setToken(token);
    }

    const loginUser = async (userCredentials) => {
        return fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userCredentials)
        })
            .then(data => data.json());
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(formValues) => onSubmit(formValues)}
        >
            { (props) => {
                return (
                    <Form className="login-form">
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
                        <button type="submit" className="btn btn-primary custom-button">Zaloguj się</button>
                    </Form>
                );
            }}
        </Formik>
    );
}

LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default LoginForm;