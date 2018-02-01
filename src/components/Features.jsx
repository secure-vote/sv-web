import React from 'react';

export default class Features extends React.Component {
	render() {
		return (
			<section id="features">
				<div id="features">
					<div className="view">
						<div className="content colors-h background-solid">
							<div className="container">
								<h2><span className="highlight">Features</span></h2>
								<div className="row">
									<div className="col-md-3 top-line">
										<h4>ANONYMITY</h4>
										<p className="highlight">Our vote anonymising algorithm is a revolution in digital democracy.</p>
										<p>SecureVote’s Copperfield algorithm provides a completely peer-to-peer, trustless secret ballot. Copperfield is immune to man in the middle attacks, and immediately identifies the presence of vote manipulation or attempts to expose voters. Thanks to this innovation, totally anonymous digital voting is now possible, and exclusive to SecureVote.</p>
										{/*<ul className="simple">*/}
											{/*<li>Lorem ipsum</li>*/}
											{/*<li> dolor sit</li>*/}
											{/*<li>amet consectetur.</li>*/}
										{/*</ul>*/}
									</div>
									<div className="col-md-3 top-line">
										<h4>SCALABILITY</h4>
										<p className="highlight">Our scalability layer means your democracy can grow, totally unimpeded.</p>
										<p>Scalability is one of the most significant challenges in the blockchain industry today. Thanks to our Blockchain Agnostic Scalability Layer (BASL), SecureVote is able to handle millions of votes a minute without causing network congestion or incurring additional fees. Unlike other systems, SecureVote users never pay to vote.</p>
										{/*<ul className="simple">*/}
											{/*<li>Lorem ipsum dolor </li>*/}
											{/*<li>sit amet consectetur</li>*/}
											{/*<li> adipisicing elit. Velit!</li>*/}
										{/*</ul>*/}
									</div>
									<div className="col-md-3 top-line">
										<h4>MOBILE APP</h4>
										<p className="highlight">Providing the best in-class user experience from anywhere, anytime.</p>
										<p>Our elegant mobile application for iOS and Android lets users access your ecosystem's governance simply and easily from wherever they are in the world, so they’ll never miss a vote. SecureVote can also be implemented right into your ecosystem’s own platform or app, creating a seamless experience.</p>
										{/*<ul className="simple">*/}
											{/*<li>Lorem ipsum dolor sit </li>*/}
											{/*<li>amet consectetur adipisicing elit.</li>*/}
											{/*<li> Nihil provident molestiae in.</li>*/}
										{/*</ul>*/}
									</div>
									<div className="col-md-3 top-line">
										<h4>BESPOKE SOLUTION</h4>
										<p className="highlight">Implement governance that is purpose built for your ecosystem.</p>
										<p>We understand that every token ecosystem is unique. SecureVote is highly flexible and can handle sophisticated, arbitrary governance models. If you can imagine it, SecureVote can handle it. Our architecture also makes upgrading your system after deployment easy, as your ecosystem adapts and grows into the future.</p>
										{/*<ul className="simple">*/}
											{/*<li> consectetur adipisicing elit. </li>*/}
											{/*<li>Lorem ipsum dolor, sit amet</li>*/}
											{/*<li>Facere commodi consequuntur rerum!</li>*/}
										{/*</ul>*/}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
