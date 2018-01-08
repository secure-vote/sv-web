import React from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {
	render() {
		return (
				<nav className="navbar navbar-default navbar-fixed-top page-transition colors-e background-solid" role="navigation" id="top-nav">
					<div className="container">
						<div className="navbar-header">
							<a className="menu-toggle ext-nav-toggle visible-xs-block" data-target=".ext-nav" href="#"><span></span></a>
							{/* <a className="menu-toggle navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" href="#"><span></span></a> */}
							<a className="navbar-brand" href="">
								<img src="../assets/images/logo.svg" />
							</a>
						</div>
						<div className="collapse navbar-collapse">
							<ul className="nav navbar-nav navbar-right">
								<li><a className="hover-effect" href="#benefits">Benefits</a></li>
								<li><a className="hover-effect" href="#features">Features</a></li>
								{/*<li><a className="hover-effect" href="government.html">Government</a></li>*/}
								<li><a className="hover-effect" href="#contact">Contact Us</a></li>
								{/*<li><a className="hover-effect" rel="noopener noreferrer" target="_blank" href="https://blog.xo1.io/"><i className="fa fa-medium fa-2x"></i></a></li>*/}
								{/*<li><a className="hover-effect" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/SecureVote/"><i className="fa fa-facebook fa-2x"></i></a></li>*/}
								{/*<li><a className="hover-effect" rel="noopener noreferrer" target="_blank" href="https://twitter.com/Secure_Vote"><i className="fa fa-twitter fa-2x"></i></a></li>*/}
								{/*<li><a className="hover-effect" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/company/18001068/"><i className="fa fa-linkedin fa-2x"></i></a></li>*/}

								{/*<li className="hidden-xs"><a className="menu-toggle ext-nav-toggle" data-target=".ext-nav" href="#"><span></span></a></li>*/}
							</ul>
						</div>
					</div>
				</nav>
		)
	}
}

