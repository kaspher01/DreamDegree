import './styles/App.css';
import './styles/HPstyles.css'
import './styles/SchoolList.css';
import Navbar from "./components/Navbar";
import RegistrationForm from "./components/RegistrationComponent/RegistrationForm";
import LoginForm from "./components/LoginComponent/LoginForm";
import useToken from "./components/LoginComponent/UseToken";
import Logout from "./components/LoginComponent/Logout";
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import Academies from "./pages/Academies";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  const { token, setToken} = useToken();

    // if (!token) {
    //     return <LoginForm setToken={setToken} />
    // }
  
  const [academies, setAcademies] = useState([])

  useEffect(() => {
    getAcademies()
  }, []);

  const getAcademies = () => {
    fetch("http://localhost:3001/academies")
        .then(res => res.json())
        .then(data => setAcademies(data))
        .catch(err => console.error(err))
  }


  return (
    <>
    <Navbar />
        <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/academies"  element={<Academies academies={academies}/>} />
            <Route path="/login" element={<LoginForm setToken={setToken} />}>
            </Route>
            <Route path="/register" element={<RegistrationForm />}>
            </Route>
            <Route path="/logout" element={<Logout />}>
            </Route>
        </Routes>
  <Footer />
    </>
  );
}

export default App;
