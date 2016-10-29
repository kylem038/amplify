import React from 'react';
import App from './components/App';
import Settings from './components/Settings';
import Instruments from './components/Instruments';
import Genres from './components/Genres';
import Skill from './components/Skill';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import { BrowserRouter, Match, Miss } from 'react-router';

const Routes = () => (
<BrowserRouter>
  <div>
    <Match exactly pattern='/' component={App} />
    <Match exactly pattern='/settings' component={Settings} />
    <Match exactly pattern='/instruments' component={Instruments} />
    <Match exactly pattern='/genres' component={Genres} />
    <Match exactly pattern='/skill' component={Skill} />
    <Match exactly pattern='/dashboard' component={Dashboard} />
    <Match exactly pattern='/profile' component={Profile} />
    <Miss component={NotFound} />
  </div>
</BrowserRouter>
);

export default Routes;
