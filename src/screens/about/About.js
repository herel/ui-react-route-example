import React, { Component} from 'react';

class About extends Component{
	render(){
		return (
			<div>
				<div className="row">
					<div className="col-12">
						<h1>Route About</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<p>Bienvido a mi blog, aprende cómo configurar ui route react en este link</p>
						<a href="https://herelodin.com/como-configurar-ui-router-react/" target="_new">https://herelodin.com/como-configurar-ui-router-react/</a>
					</div>
				</div>
			</div>
		);
	}
}

export default About;