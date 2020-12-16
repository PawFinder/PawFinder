import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';

import { __NavBar } from '../styles/__NavBar';
import { __Btn, __Logo } from '../styles/__Utils';
import pawFinderLogo from '../icons/location.svg';

const NavBar = () => {
  const [login, setLogin] = useState(false);

  const responseGoogle = (response) => {
    console.log(response);
    setLogin(true);
  }

  return (  
    <__NavBar>
      <__Btn secondary>Favs</__Btn>
      <__Logo main src={pawFinderLogo}/>
      <GoogleLogin 
        clientId="949269870683-s8cpdloouslu92ikabu07ch9fsde9kuo.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
        render={renderProps => (
          <__Btn primary onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</__Btn>
        )}
      />
      {/* <__Btn primary>Login</__Btn> */}
    </__NavBar>
  ) 
}

export default NavBar;
