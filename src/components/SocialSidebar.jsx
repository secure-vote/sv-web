import React from 'react';

export default class SocialSidebar extends React.Component {
	render() {
		return (
			<div className="social-sidebar colors-e background-solid navbar-collapse collapse">
				<a rel="noopener noreferrer" target="_blank" href="https://blog.xo1.io/"><i className="fa fa-medium fa-2x"></i></a>
				<a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/SecureVote/"><i className="fa fa-facebook fa-2x"></i></a>
				<a rel="noopener noreferrer" target="_blank" href="https://twitter.com/Secure_Vote"><i className="fa fa-twitter fa-2x"></i></a>
				<a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/company/18001068/"><i className="fa fa-linkedin fa-2x"></i></a>
			</div>
		)
	}
}
