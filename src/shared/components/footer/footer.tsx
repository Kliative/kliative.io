import React, { PureComponent } from 'react';
import './footer.scss';

class Footer extends PureComponent {
	constructor(props: any) {
		super(props);
		this.state = {

		};
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<footer className="wrapper style1 align-center">
					<div className="inner">
						<h2>Get in touch</h2>
						<ul className="icons">
							<li><a href="https://github.com/Kliative" className="icon style1 fa-github"><span className="label">GitHub</span></a></li>
							<li><a href="https://www.behance.net/klish3" className="icon style1 fa-behance"><span className="label">Behance</span></a></li>
							<li><a href="https://www.instagram.com/klish3/" className="icon style1 fa-instagram"><span className="label">Instagram</span></a></li>
							<li><a href="https://za.linkedin.com/in/tawandakli" className="icon style1 fa-linkedin"><span className="label">LinkedIn</span></a></li>
							<li><a href="https://medium.com/@Klish3" className="icon style1 fa-medium"><span className="label">Medium</span></a></li>
							<li><a href="mailto:kliation@gmail.com" className="icon style1 fa-envelope"><span className="label">Email</span></a></li>
						</ul>
						<p>&copy; Kliative</p>
					</div>
				</footer>

			</div>
		);
	}
}

export default Footer;
