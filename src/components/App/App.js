import React, { Component } from 'react';
import './App.scss';

import { Navbar } from '../Navbar/Navbar';
import { Search } from '../Search/Search';

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Search />
      </React.Fragment>
    );
  }
}
