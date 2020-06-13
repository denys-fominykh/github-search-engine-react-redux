import React from 'react';
import { connect } from 'react-redux';

import Navbar from './components/Navbar';
import Search from './components/Search';
import Card from './components/Card';
import getResourceItem from './services/githubServices';
import { resetUserAccount } from './actions';

const App = ({ user, getResourceItem, resetUserAccount }) => {
  return (
    <div className="App">
      <Navbar />
      <Search getUser={getResourceItem} resetUser={resetUserAccount} />
      <Card user={user} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getResourceItem: (username) => dispatch(getResourceItem(username)),
    resetUserAccount: () => dispatch(resetUserAccount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
