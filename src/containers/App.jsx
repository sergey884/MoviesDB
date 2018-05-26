import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFilmsStart } from '<actions>';
import App from '<components>/App';

const mapStateToProps = state => ({
  moviesList: state.movies.moviesList,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getFilmsStart,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
