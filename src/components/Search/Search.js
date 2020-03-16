import React, { Component } from 'react';
import './Search.scss';

export class Search extends Component {
  onSearchChange = event => {
    this.props.getUsername(event.target.value);
  };

  render() {
    return (
      <div className="search__block">
        <div className="search__input">
          <h1>Start typing GitHub username:</h1>
          <div className="search__input">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">
                  https://github.com/
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="facebook"
                onChange={this.onSearchChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
