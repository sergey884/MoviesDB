import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Search from '<containers>/Search';
import '<styles>/header.scss';

export default class Header extends Component {
  static propTypes = {
  };

  render() {
    return (
      <header className="header">
        <div className="header__text">netflixroulette</div>
        <Search />
      </header>
    );
  }
}
