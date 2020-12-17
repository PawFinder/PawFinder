import React from 'react';

import NavBar from './components/NavBar';
import LandingPage from './components/landing-page/LandingPage';
import Footer from './components/Footer';
import DialogSelect from './components/landing-page/Search';

const App = () => (
  <>
    <NavBar />
    <LandingPage />
    {/* <MainPage /> */}
    <Footer />
  </>
);

export default App;
