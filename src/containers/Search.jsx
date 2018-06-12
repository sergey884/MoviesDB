import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setData, searchFilmsStart } from '<actions>';
import Search from '<components>/Search';

const mapStateToProps = state => ({
  searchText: state.movies.searchText,
  searchBy: state.movies.searchBy,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setData,
  searchFilmsStart,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
