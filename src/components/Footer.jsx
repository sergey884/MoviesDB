import React, { Component } from 'react';
import '<styles>/footer.scss';

export default class Footer extends Component {
  static propTypes = {
  };

  render() {
    return (
      <footer className="footer">
        <div className="footer__text">netflixroulette</div>
      </footer>
    );
  }
}
