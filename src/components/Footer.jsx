import React from 'react';

export default class Footer extends React.Component {
	render() {
		return (
		<footer className="colors-g page-transition non-preloading">
			<div className="container scroll-in-animation" data-animation="fadeInDown">
				<div className="row">
					<div className="col-md-4">
						<img alt="SecureVote" src="../assets/images/logo_text.svg" />
						<div className="footer-description">
							<p>Democratize the world.</p>
						</div>
						{/*<div className="separator"></div>*/}
					</div>
					<div className="col-md-4 text-center">
						{/*<h5>Additional Links</h5>*/}
						{/*<ul className="simple">*/}
							{/*<li><a href="#">Documentation</a></li>*/}
							{/*<li><a href="#">Blog</a></li>*/}
							{/*<li><a href="#how-we-work">How We Work</a></li>*/}
							{/*<li><a href="#who-we-are">Who We Are</a></li>*/}
							{/*<li><a href="#numbers">Our Numbers</a></li>*/}
						{/*</ul>*/}
						<p className="social-links">
							<a rel="noopener noreferrer" target="_blank" href="https://blog.xo1.io/"><i className="fa fa-medium"></i></a>
							<a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/SecureVote/"><i className="fa fa-facebook"></i></a>
							<a rel="noopener noreferrer" target="_blank" href="https://twitter.com/Secure_Vote"><i className="fa fa-twitter"></i></a>
							<a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/company/18001068/"><i className="fa fa-linkedin"></i></a>
						</p>
					</div>
					<div className="col-md-4 text-right">
						{/*<h5>Recent Posts</h5>*/}
						{/*<ul className="simple">*/}
							{/*<li><a href="#">Post with Featured Image</a></li>*/}
							{/*<li><a href="#">And Post with Slider</a></li>*/}
							{/*<li><a href="#">Post with Vimeo Video</a></li>*/}
							{/*<li><a href="#">Another Post with Image</a></li>*/}
							{/*<li><a href="#">More...</a></li>*/}
						{/*</ul>*/}
						<img alt="ADCA" src="../assets/images/Footer-ADCA-logo.png" width="180" />
					</div>
				</div>
			</div>
			<div className="bottom text-center background-5-b">
				© 2017 All Rights Reserved Exo One Pty Ltd.
				{/*<a href="#" className="open-overlay-window heading" data-overlay-window=".credits-overlay">Credits.</a>*/}
			</div>
		</footer>
		)
	}
}
