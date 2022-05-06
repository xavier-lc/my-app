import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import { matchRoutes } from 'react-router-dom-v5-compat';

export default function App() {
  const location = useLocation();
  const showingModal = matchRoutes([{path: '/modal'}], location.pathname)?.length > 0;
  const [baseLocation, setBaseLocation] = useState(
    showingModal ? {
      pathname: '/',
      search: '',
      state: {},
      hash: '',
    } : location,
  );

  useEffect(() => {
    if (!showingModal) {
      setBaseLocation(location);
    }
  }, [location, location.pathname]);

  return (
      <div className='container'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/modal">Modal</Link>
          </li>
        </ul>

        <hr />

        <main>
          <Switch location={baseLocation}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>

          {showingModal && <Switch location={location}>
            <Route path="/modal">
              <Modal />
            </Route>
          </Switch>}
        </main>
      </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h2>Modal</h2>
    </div>
  );
}
