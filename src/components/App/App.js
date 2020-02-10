import React, { Component } from 'react';
import './App.scss';

import { Navbar } from '../Navbar/Navbar';
import { Search } from '../Search/Search';
import { Card } from '../Card/Card';

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
        { this.state.username ? <Card /> : null }
      </React.Fragment>
    );
  }
}
