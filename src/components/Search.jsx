import React, { Component } from 'react';

export default class Search extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<form className="searchBlock">
				<input type="text" className="searchBlock__text" />
				<input type="submit" value="Search" className="searchBlock__button" />
			</form>
		);
	}
}