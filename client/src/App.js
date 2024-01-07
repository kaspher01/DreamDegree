import './App.css';
import RegistrationForm from "./components/RegistrationComponent/RegistrationForm";
import LoginForm from "./components/LoginComponent/LoginForm";
import useToken from "./components/LoginComponent/UseToken";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Logout from "./components/LoginComponent/Logout";


function App() {
    const { token, setToken} = useToken();

    if (!token) {
        return <LoginForm setToken={setToken} />
    }

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/">
                </Route>
                <Route path="/login" element={<LoginForm setToken={setToken} />}>
                </Route>
                <Route path="/register" element={<RegistrationForm />}>
                </Route>
                <Route path="/logout" element={<Logout />}>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
