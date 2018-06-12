import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Movies from '<components>/Movies';
import Header from '<components>/Header';

export default class App extends Component {
  static propTypes = {
    getFilmsStart: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getFilmsStart } = this.props;
    console.log('getFilmsStart', getFilmsStart);
    getFilmsStart();
  }

  render() {
    const { moviesList } = this.props;

    return (
      <Fragment>
        <Header />
        <section>
          {moviesList &&
            <Movies moviesList={moviesList} />
          }
        </section>
        <footer>MoviesDB FOOTER!</footer>
      </Fragment>
    );
  }
}
