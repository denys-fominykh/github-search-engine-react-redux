import React, { Component } from 'react';
import './App.scss';

import { Navbar } from '../Navbar/Navbar';
import { Search } from '../Search/Search';
import { Card } from '../Card/Card';

export class App extends Component {
  state = {
    user: {
      name: '',
      location: '',
      avatarUrl: '',
      publicRepos: '',
      publicGists: '',
      followers: '',
      following: '',
      htmlUrl: '',
    },
    isLoaded: false,
    error: null,
  };

  getUser = username => {
    const clientId = '1b9a0ab83be88a82a5b3';
    const clientSecret = 'd12903ccc4bb851b0d67ca0ead54696eeeddfb86';
    fetch(
      `https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`,
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            user: {
              name: result.name,
              location: result.location,
              avatarUrl: result.avatar_url,
              publicRepos: result.public_repos,
              publicGists: result.public_gists,
              followers: result.followers,
              following: result.following,
              htmlUrl: result.html_url,
            },
            isLoaded: true,
          });
        },
        error => {
          this.setState({
            error,
          });
        },
      );
  };

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <Navbar />
        <Search getUsername={this.getUser} />
        {this.state.isLoaded ? <Card user={user} /> : false}
      </React.Fragment>
    );
  }
}
