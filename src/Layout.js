import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { UIView } from '@uirouter/react';

class Layout extends Component{
	render(){
		return (
			<div>
				<Header />
				<div className="wrapper">
					<div className="container">
						<UIView />
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default Layout;