import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Movies from '<components>/Movies';
import Header from '<components>/Header';
import Footer from '<components>/Footer';
import '<styles>/app.scss';

export default class App extends Component {
  static propTypes = {
    getFilmsStart: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getFilmsStart } = this.props;

    getFilmsStart();
  }

  render() {
    const { moviesList } = this.props;

    return (
      <Fragment>
        <Header />
        <section className="app__section">
          {moviesList &&
            <Movies moviesList={moviesList} />
          }
        </section>
        <Footer />
      </Fragment>
    );
  }
}
