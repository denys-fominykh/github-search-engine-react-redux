import React from 'react';
import styled from 'styled-components';

const Card = ({ user }) => {
  const {
    name,
    location,
    avatar_url,
    public_repos,
    public_gists,
    followers,
    following,
    html_url,
  } = user;

  if (user) {
    return (
      <CardBlock>
        <img src={avatar_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <h6 className="card-title">{location}</h6>
          <p className="card-text">Public repositories: {public_repos}</p>
          <p className="card-text">Public gists: {public_gists}</p>
          <p className="card-text">Followers: {followers}</p>
          <p className="card-text">Following: {following}</p>
          <a
            href={html_url}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </a>
        </div>
      </CardBlock>
    );
  }

  return null;
};

const CardBlock = styled.div`
  margin: 0 auto;
  width: 18rem;
`;

export default Card;
