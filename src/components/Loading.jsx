import React from 'react';

export default class Loading extends React.Component {
	render() {
		return (
			<div className="gate colors-e background-solid">
				<div className="gate-bar background-heading-e" />
				<ul className="loader">
					<li className="background-heading-e"></li>
					<li className="background-heading-e"></li>
					<li className="background-heading-e"></li>
				</ul>
			</div>
		)
	}
}
