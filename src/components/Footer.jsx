import React from 'react';

export default class Footer extends React.Component {
	render() {
		return (
		<footer className="colors-g page-transition non-preloading">
			<div className="container scroll-in-animation" data-animation="fadeInDown">
				<div className="row">
					<div className="col-md-4">
						<embed style={{ width: '70%' }} src="../assets/images/logo_text.svg" />
						<div className="footer-description">
							<p>Mauris metus tellus, lacinia nec efficitur quis, rhoncus et mi.</p>
						</div>
						<p className="social-links">
							<a rel="noopener noreferrer" target="_blank" href="https://blog.xo1.io/"><i className="fa fa-medium"></i></a>              
							<a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/SecureVote/"><i className="fa fa-facebook"></i></a>
							<a rel="noopener noreferrer" target="_blank" href="https://twitter.com/Secure_Vote"><i className="fa fa-twitter"></i></a>
							<a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/company/18001068/"><i className="fa fa-linkedin"></i></a>
						</p>
					</div>
					<div className="col-md-4">
						<h5>Additional Links</h5>
						<ul className="simple">
							<li><a href="#">Documentation</a></li>
							<li><a href="#">Blog</a></li>
							<li><a href="#how-we-work">How We Work</a></li>
							<li><a href="#who-we-are">Who We Are</a></li>
							<li><a href="#numbers">Our Numbers</a></li>
						</ul>
					</div>
					<div className="col-md-4">
						<h5>Recent Posts</h5>
						<ul className="simple">
							<li><a href="#">Post with Featured Image</a></li>
							<li><a href="#">And Post with Slider</a></li>
							<li><a href="#">Post with Vimeo Video</a></li>
							<li><a href="#">Another Post with Image</a></li>
							<li><a href="#">More...</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="bottom text-center background-5-b">
				© 2017 All Rights Reserved. <a href="#" className="open-overlay-window heading" data-overlay-window=".credits-overlay">Credits.</a>
			</div>
		</footer>
		)
	}
}
