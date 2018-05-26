import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Search from '<components>/Search';
import Movies from '<components>/Movies';

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
    console.log('App - moviesList', moviesList);

    return (
      <Fragment>
        <header>
          <Search />
        </header>
        <section>
          {moviesList &&
            <Movies moviesList={moviesList} />
          }
        </section>
        <footer>Hello1 from MoviesDB FOOTER!</footer>
      </Fragment>
    );
  }
}
