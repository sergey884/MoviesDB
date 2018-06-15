import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '<styles>/moviesItem.scss';

export default class MoviesItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  };

  prepareGenres = genres => genres.join(' & ');

  render() {
    const { item } = this.props;
    const {
      poster_path,
      title,
      id,
      release_date,
      genres,
    } = item;
    const date = release_date ? moment(release_date, 'YYYY-MM-DD').get('year') : null;
    return (
      <div className="moviesItem">
        <img className="moviesItem__poster" src={poster_path} alt={title} />
        <div className="moviesItem__description">
          <Link
            to={{
              pathname: `/film/${id}`,
              state: item,
            }}
            className="moviesItem__title"
          >
            {title}
          </Link>
          <div className="moviesItem__date">{date}</div>
        </div>
        <div className="moviesItem__genre">
          {this.prepareGenres(genres)}
        </div>
      </div>
    );
  }
}

/*
    {
      "id": 287947,
      "title": "Shazam!",
      "tagline": "",
      "vote_average": 0,
      "vote_count": 5,
      "release_date": "2019-04-05",
      "poster_path": "https://image.tmdb.org/t/p/w500/yUOJHa9XmB1H0iYodG9Kb3YCc9T.jpg",
      "overview": "We all have a superhero inside us, it just takes a bit of magic to bring it out. In Billy Batson's case, by shouting out one word--SHAZAM!--this streetwise 14-year-old foster kid can turn into the adult superhero Shazam, courtesy of an ancient wizard.Still a kid at heart--inside a ripped, godlike body--Shazam revels in this adult version of himself by doing what any teen would do with superpowers: have fun with them! Can he fly? Does he have X-ray vision? Can he shoot lightning out of his hands? Can he skip his social studies test? Shazam sets out to test the limits of his abilities with the joyful recklessness of a child. But he'll need to master these powers quickly in order to fight the deadly forces of evil controlled by Doctor Thaddeus Sivana.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Action",
        "Adventure",
        "Fantasy",
        "Science Fiction"
      ],
      "runtime": null
    },
    */