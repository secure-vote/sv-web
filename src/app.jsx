import React from 'react';
import Navigation from './components/Navigation';
import Extnavbar from './components/Extnavbar';
import Home from './components/Home';
import Benefits from './components/Benefits';
import Team from './components/Team';
import Numbers from './components/Numbers';
import Recognise from './components/Recognise';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Bottom from './components/Bottom';
import 'styles/index.scss';

export default class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<Loading />
				<Extnavbar />
				<Bottom />
				<Navigation />
				<Home />
				<Benefits />
				<Team />
				<Numbers />
				<Recognise />
				<Contact />
				<Footer />
			</div>
		)
	}
}
