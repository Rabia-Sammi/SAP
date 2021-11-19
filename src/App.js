import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { library } from '@fortawesome/fontawesome-svg-core'

import Listing from './Pages/Listing';
import LandingPage from './Pages/LandingPage';
import OtherPage from './Pages/OtherPage';
import Layout from './Components/Layout/Layout';
import DetailPage from './Pages/DetailPage';


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
          <Route path='/solution' exact>
            <Listing />
          </Route>
          <Route path='/solution/:id'>
            <DetailPage/>
          </Route>
        </Switch>
        </Layout>
  
    );
      
}

export default App;
