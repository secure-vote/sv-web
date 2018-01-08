import React from 'react';

export default class Hero extends React.Component {
	render() {
		return (
			<section id="hero">
				<div className="view colors-c .background-solid">
					<div className="content container">
						<div className="col-md-12">
							<h3 className="medium-font-weight">
								<span className="highlight-g">SecureVote</span> is a scalable, reliable, and customisable decentralised governance solution, designed to easily interface
								with any blockchain.</h3>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
