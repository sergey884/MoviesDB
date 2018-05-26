import React, { Component } from 'react';
import '<styles>/search.scss';

export default class Search extends Component {
  render() {
    console.log('Search');
    return (
      <form className="searchBlock">
        <input type="text" className="searchBlock__text" />
        <input type="submit" value="Search" className="searchBlock__button" />
      </form>
    );
  }
}