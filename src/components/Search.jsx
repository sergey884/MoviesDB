import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '<styles>/search.scss';

export default class Search extends Component {
  static propTypes = {
    setData: PropTypes.func.isRequired,
    searchFilmsStart: PropTypes.func.isRequired,
    searchText: PropTypes.string.isRequired,
  };

  setTitle = (event) => {
    const { setData } = this.props;
    const { target: { value } } = event;

    setData({ searchBy: value });
  }

  handleSearchTextChange = (event) => {
    const { setData } = this.props;
    const { target: { value } } = event;

    setData({ searchText: value });
  }

  search = (event) => {
    const { searchFilmsStart } = this.props;
    event.preventDefault();

    searchFilmsStart();
  }

  render() {
    const {
      location,
      searchText,
    } = this.props;
    console.log('Search---Search----Search', location);
    return (
      <form className="searchBlock">
        <label
          htmlFor="searchText"
          className="searchBlock__label"
        >Find Your Movie
        </label>
        <input
          type="text"
          id="searchText"
          value={searchText}
          onChange={this.handleSearchTextChange}
          className="searchBlock__text"
        />
        <div className="searchBlock__buttons">
          <div>
            <span className="searchBlock__buttons__text">SERACH BY</span>
            <input
              type="button"
              value="TITLE"
              onClick={this.setTitle}
              className="searchBlock__button searchBlock__button-title"
            />
            <input
              type="button"
              value="GENRE"
              onClick={this.setTitle}
              className="searchBlock__button searchBlock__button-genre"
            />
          </div>
          <input
            type="submit"
            value="Search"
            onClick={this.search}
            className="searchBlock__button"
          />
        </div>
      </form>
    );
  }
}