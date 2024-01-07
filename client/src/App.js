import './App.css';
import RegistrationForm from "./components/RegistrationComponent/RegistrationForm";
import LoginForm from "./components/LoginComponent/LoginForm";
import useToken from "./components/LoginComponent/UseToken";
import logout from "./components/LoginComponent/Logout";


function App() {
    const { token, setToken} = useToken();

    if (!token) {
        console.log(token);
        return <LoginForm setToken={setToken} />
    }

  return (
    <>
        <div>test</div>
        {/*<RegistrationForm></RegistrationForm>*/}
    </>
  );
}

export default App;
