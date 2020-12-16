import React , {useState} from 'react';
import { __NavBar } from '../styles/__NavBar';
import { GoogleLogin } from 'react-google-login';

const NavBar = () => {

  const [login, setLogin] = useState(false); 

  const responseGoogle = (response) => {
    console.log(response);
    setLogin(true);
  }

  return (
    <__NavBar>
      <h1>Favs</h1>
      <img alt="PawFinder logo" />
      {!login ?
        <GoogleLogin
          clientId="949269870683-s8cpdloouslu92ikabu07ch9fsde9kuo.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        :
        <p>Welcome!</p>
      }
    </__NavBar>
  )
}

export default NavBar;
