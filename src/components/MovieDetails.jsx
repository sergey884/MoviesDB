import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import '<styles>/moviesDetails.scss';

export default class MovieDetails extends Component {
  render() {
    const { location: { state } } = this.props;
    const {
      overview,
      poster_path,
      title,
      vote_average,
      release_date,
      runtime,
    } = state;
    const date = release_date ? moment(release_date, 'YYYY-MM-DD').get('year') : null;

    return (
      <div className="movieDetails">
        <div className="movieDetails__text">netflixroulette</div>
        <button className="movieDetails__searchButton">
          <Link to='/' className="movieDetails__searchLink">SEARCH</Link>
        </button>
        <img className="movieDetails__poster" src={poster_path} alt={title} />
        <div className="movieDetails__description">
          <div>
            <span className="movieDetails__title">{title}</span>
            <span className="movieDetails__rating">{vote_average}</span>
          </div>
          <div>
            <span className="movieDetails__releaseDate">{date}</span>
            <span className="movieDetails__runtime">{runtime} min</span>
          </div>
          <div className="movieDetails__overview">{overview}</div>
        </div>
      </div>
    );
  }
}
