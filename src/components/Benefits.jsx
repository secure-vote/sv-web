import React from 'react';

export default class Benefits extends React.Component {
	render() {
		return (
		<section id="benefits">
			<div className="view" id="benefits">
				<div className="content colors-e background-solid">
					<div className="container">
						<h2>Benefits</h2>
            <div className="row scroll-in-animation" data-animation="fadeInLeft">
							<div className="col-md-4">
								<div className="col-icon">
									<i className="li_user"></i>
								</div>
								<div className="col-content">
									<h4>Empowers <span className="highlight"> users and encourages network participation.</span></h4>
									<p> Help your network not just survive, but thrive, by encourages its users to become an active part of its future growth and
                  development.</p>
								</div>
							</div>
							<div className="col-md-4">
								<div className="col-icon">
									<i className="icon-value-coins"></i>
								</div>
								<div className="col-content">
									<h4>Interfaces <span className="highlight"> easily with any ERC20 token or custom blockchain.</span></h4>
									<p> SecureVote can operate in concert with any chain, and in multi-chain environments with ease.</p>
								</div>
							</div>
							<div className="col-md-4">
								<div className="col-icon">
									<i className="fa fa-code"></i>
								</div>
								<div className="col-content">
									<h4>Removes <span className="highlight"> overhead and hassle of in house development.</span></h4>
									<p> Focus your efforts on the work that your team is best suited to tackle and let SecureVote make implementing governance easy.</p>
								</div>
							</div>
            </div>
            <div className="row scroll-in-animation" data-animation="fadeInRight">
							<div className="col-md-4">
								<div className="col-icon">
									<i className="fa fa-bank"></i>
								</div>
								<div className="col-content">
									<h4>Promote <span className="highlight"> a strong governance solution from the outset.</span></h4>
									<p>SecureVote can handle sophisticated governance structures and allows you to design a model that works for your ecosystem's needs.</p>
								</div>
							</div>
							<div className="col-md-4">
								<div className="col-icon">
									<i className="li_like"></i>
								</div>
								<div className="col-content">
									<h4>Build <span className="highlight"> confidence in your token sale.</span></h4>
									<p> Show supporters you mean business. Back your project with a SecureVote governance system and provide assurance to your community.</p>
								</div>
							</div>
							<div className="col-md-4">
								<div className="col-icon">
									<i className="li_world"></i>
								</div>
								<div className="col-content">
									<h4>Reduces <span className="highlight"> the likelihood of being classed as a security under the Howey Test.</span></h4>
									<p> By making your ecosystem's users a part of the process, a decentralized governance system helps mitigate security classification risk.</p>
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
