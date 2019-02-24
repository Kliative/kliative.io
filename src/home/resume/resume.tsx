import React, { PureComponent } from 'react';
import ironManMe from '../../shared/images/me_cv_1.jpg'
import './resume.scss';

class Resume extends PureComponent {
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
                		<section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="resume">
			<div className="content">
				<h2>Curriculum Vitae</h2>
				<p>An account of my eductaion, qualifications and work experience.</p>
				<ul className="actions stacked">
					<li><a href="cv/" className="icon style2 fa-desktop"></a> - View Online</li>
					<li><a data-toggle="modal" data-target="#exampleModal" className="icon style2 fa-download"></a> - Download Printable</li>
				</ul>
			</div>
			<div className="image">
				<img src={ironManMe} alt="ironman-me" />
			</div>
		</section>
            </div>
        );
    }
}

export default Resume;
