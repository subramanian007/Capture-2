import React from 'react';

import GlobalStyle from './components/GlobalStyle';

import AboutPage from './pages/AboutPage';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetails from './pages/MovieDetails';

import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact>
            <AboutPage />
          </Route>
          <Route path="/OurWork" exact>
            <OurWork />
          </Route>
          <Route path="/ContactUs">
            <ContactUs />
          </Route>
          <Route path="/OurWork/:id">
            <MovieDetails />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
