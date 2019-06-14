import React from 'react';
import logo from '../../images/kliative_logo.png';
import './indicator.scss';

const Indicator = () => {
	return (
		<div className="ipl-progress-indicator" id="ipl-progress-indicator">
			<div className="ipl-progress-indicator-head">
				<div className="first-indicator"></div>
				<div className="second-indicator"></div>
			</div>
			<div className="insp-logo-frame">
				<img className="insp-logo-frame-img fadeIn animated" src={logo} alt="" />
			</div>
		</div>
	)
};


export default Indicator;
