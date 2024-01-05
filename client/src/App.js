import './App.css';
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import Academies from "./pages/Academies";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
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
        {/*<Route path="/register" element={<RegistrationForm />}/>*/}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
