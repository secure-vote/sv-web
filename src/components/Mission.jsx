import React from 'react';

export default class Mission extends React.Component {
	render() {
		return (
			<section id="mission">
				<div className="view" id="who-we-are">
					<div className="content pane">
						<div className="container-fluid">
							<div className="row">
								<div className="col-md-6 stretch-height pane">
									<a href="#" className="hover-overlay">
										<div className="view fluid-height colors-h alt-background-solid">

											{/*<img className="bg static" src="../assets/images/securevote_dark_1920x1200.jpg" />*/}
											{/*<div className="content incut colors-d background-transparent">*/}
											{/*<div className="position-middle-center text-center">*/}
											{/*<a className="button background-lite-c heading-c" href="#work">View Our Work</a>*/}
											{/*</div>*/}
											{/*</div>*/}

											{/*<div className="item col-md-6 colors-h alt-background-solid">*/}
											<img className="image-center" alt="Swarm Fund" src="../assets/images/SwarmFund.svg"/>
											<div className="overlay background-90-a">
												<div className="hidden-xs">
													<p className="title heading-a">Swarm Fund</p>
													<p className="text-center heading-a"><strong>“From the onset, we saw decentralized governance to be a crucial element to Swarm Fund’s investment platform, and we knew that building the system we envisioned would not be trivial. With the SecureVote governance framework we found a powerful technology basis and an outstanding team, that was able to build the customized solution we had in mind for the Swarm ecosystem. We think there's a huge need for voting services on the blockchain, and we are certain that SecureVote’s contributions to the industry at large will be invaluable.”</strong></p>
												</div>
											</div>
											{/*</div>*/}

										</div>
									</a>
								</div>
								<div className="col-md-6  stretch-height pane" id="mission">
									<div className="view fluid-height">
										<div className="content incut colors-h background-solid">
											<div className="position-middle-center">
												<h3 className="text-left"><span className="highlight">Our</span> Mission</h3>
												<p className="subtitle highlight"><strong>Democratize the World</strong></p>
												<p>At SecureVote, Democracy is our passion. We’re committed to using our  technology to not only support decentralised organisations and ecosystems but to help transform democracy and governance world wide.</p>
											</div>
										</div>
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
