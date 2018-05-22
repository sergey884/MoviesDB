import React, { Component, Fragment } from 'react';
import Search from "<components>/Search";

export default class App extends Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		const { getFilmsStart } = this.props;

		getFilmsStart();
	}

	render() {
		return (
			<Fragment>
				<header>
					<Search />
				</header>
				<footer>Hello1 from MoviesDB FOOTER!</footer>
			</Fragment>
		);
	}
}