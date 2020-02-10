import React, { Component } from 'react';
import './App.scss';

import { Navbar } from '../Navbar/Navbar';
import { Search } from '../Search/Search';

export class App extends Component {
  state = {
    username: '',
  };

  onSearchChange = username => {
    this.setState({ username });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Search onSearchChange={this.onSearchChange} />
      </React.Fragment>
    );
  }
}
