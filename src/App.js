import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { library } from '@fortawesome/fontawesome-svg-core'



import Listing from './Pages/Listing';
import LandingPage from './Pages/LandingPage';
import OtherPage from './Pages/OtherPage';
import Layout from './Components/Layout/Layout';





function App() {
  return (
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/landingpage' />
          </Route>
          <Route path='/landingpage' exact>
            <LandingPage />
          </Route>
          <Route path='/listing'>
            <Listing />
          </Route>
          <Route path='/other'>
            <OtherPage />
          </Route>
        </Switch>
        </Layout>
  
    );
      
}

export default App;
