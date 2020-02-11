import React, { Component } from 'react';
import './Card.scss';

export class Card extends Component {
  render() {
    const {
      name,
      location,
      avatarUrl,
      publicRepos,
      publicGists,
      followers,
      following,
      htmlUrl,
    } = this.props.user;

    return (
      <React.Fragment>
        <div className="card">
          <img src={avatarUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <h6 className="card-title">{location}</h6>
            <p className="card-text">Public repositories: {publicRepos}</p>
            <p className="card-text">Public gists: {publicGists}</p>
            <p className="card-text">Followers: {followers}</p>
            <p className="card-text">Following: {following}</p>
            <a
              href={htmlUrl}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
