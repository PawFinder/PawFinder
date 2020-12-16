import React from 'react';

import NavBar from './components/NavBar';
import LandingPage from './components/landing-page/LandingPage';
import Footer from './components/Footer';
import SelectPage from './components/landing-page/Search.jsx';

const App = () => (
  <>
    <NavBar />
    <SelectPage />
    <LandingPage />
    {/* <MainPage /> */}
    <Footer />
  </>
);

export default App;
