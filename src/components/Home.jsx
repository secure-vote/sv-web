import React from 'react';

export default class Home extends React.Component {
	render() {
		return (
			<section id="home">
				<div className="view">
					<img className="bg" src="../assets/images/home.jpeg" />
					<img className="bg" src="../assets/images/home.jpeg" />
					<div className="content home-theme full-size colors-c background-20">
						<div className="container">
							<div className="row">
								<div className="col-md-8">
									<embed width="120%" scale="tofit" src="../assets/images/logo_text.svg" />
									<div className="text-left textillate heading " data-textillate-options="{loop:false, in:{effect:'flipInY', sequence:true}, out:{effect:'flipOutY', sequence:true}}">
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
