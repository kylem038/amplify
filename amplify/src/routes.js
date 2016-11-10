import React from 'react';
import App from './components/App';
import Settings from './components/Settings';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import { connect } from 'react-redux';
import { BrowserRouter, Match, Miss, Redirect } from 'react-router';

const { auth } = this.props;

const Routes = () => (
<BrowserRouter>
  <div>
    <Match pattern="/" exactly render={() => (
      auth ? (
        <Redirect to="/settings"/>
      ) : (
        <App />
      )
    )}/>
    {/* <Match exactly pattern='/' component={App} /> */}
    <Match exactly pattern='/settings' component={Settings} />
    <Match exactly pattern='/dashboard' component={Dashboard} />
    <Match exactly pattern='/profile' component={Profile} />
    <Miss component={NotFound} />
  </div>
</BrowserRouter>
);

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Routes)
