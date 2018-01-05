import React from 'react';
import Navigation from './components/Navigation';
import Extnavbar from './components/Extnavbar';
import SocialSidebar from './components/SocialSidebar';
import Home from './components/Home';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Features from './components/Features';
import CTA from './components/CTA';
// import Team from './components/Team';
import Mission from './components/Mission';
// import Numbers from './components/Numbers';
import Recognise from './components/Recognise';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';
// import Bottom from './components/Bottom';
import 'styles/index.scss';

export default class App extends React.Component {
	render() {
		return (
			<div className='App'>
				{/*<div className="background-gradient2"></div>*/}
				<Loading />
				<Extnavbar />
				{/*<Bottom />*/}
				<SocialSidebar />
				<Navigation />
				<Home />
				<Hero />
				<Benefits />
				<Features />
				<CTA />
				{/*<Team />*/}
				<Mission />
				{/*<Numbers />*/}


				<Recognise />
				<Contact />
				<Footer />
			</div>
		)
	}
}
