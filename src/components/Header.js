import React, { Component } from 'react';
import { UISref, UISrefActive } from '@uirouter/react';

class Header extends Component{
	render(){
		return (
			<nav className="navbar navbar-expand-lg navbar-light">
				<a className="navbar-brand" href="https://herelodin.com" target="_new">Herel Odin</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<UISrefActive class="active">
							<li className="nav-item">
								<UISref to="layout.home">
									<a className="nav-link">Home</a>
								</UISref>
							</li>
						</UISrefActive>
						<UISrefActive class="active">
							<li className="nav-item">
								<UISref to="layout.about">
									<a className="nav-link">About</a>
								</UISref>
							</li>
						</UISrefActive>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Header;