import React, { Component } from 'react';

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
			<div>Hello1 from MoviesDB!</div>
		);
	}
}