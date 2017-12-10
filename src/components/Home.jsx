import React from 'react';

export default class Home extends React.Component {
	render() {
		return (
			<section id="home">
				<div className="view">
					<img alt className="bg static" src="../assets/images/home_5.jpeg" />
					<div className="content home-lucy full-size colors-c background-20">
						<div className="container">
							<div className="row">
								<div className="col-md-8">
									<embed width="130%" scale="tofit" src="../assets/images/securevote_light.svg" />
									<div className="text-left textillate heading hidden-xs hidden-sm" data-textillate-options="{loop:true, in:{effect:'flipInY', sequence:true}, out:{effect:'flipOutY', sequence:true}}">
										Decentralized governance made easy.
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
