import React from 'react';

export default class CTA extends React.Component {
	render() {
		return (
			<section id="cta">
				<div className="view">
					<img className="bg" src="../assets/images/home_5.jpeg" /> <img className="bg" src="../assets/images/home_5.jpeg" />
					<div className="content half-size colors-h">
						<div className="container">
							<h2><div className="text-center highlight-a textillate heading hidden-xs hidden-sm" data-textillate-options="{loop:true, in:{effect:'flipInY', sequence:true}, out:{effect:'fadeOut', sync:true}}">
								<p className="title">Let's work together to build beautiful democracy</p>
							</div></h2>
							<div className="separator"></div>
							<p className="text-center">
								<a href="#contact" className="button button-large background-f highlight-f">Contact</a>
							</p>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
