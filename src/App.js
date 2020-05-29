import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './components/Navbar';
import Search from './components/Search';
import Card from './components/Card';
import getResourceItem from './services/githubServices';

const App = ({ user, getResourceItem }) => {
  return (
    <div className="App">
      <Navbar />
      <Search getUser={getResourceItem} />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
