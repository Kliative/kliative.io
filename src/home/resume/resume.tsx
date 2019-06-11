import React, { PureComponent } from 'react';
import ironManMe from '../../shared/images/me_cv_1.jpg'
import './resume.scss';

const Resume = (props: any) => {
    return (
        <div>
            <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="resume">
                <div className="content">
                    <h2>Curriculum Vitae</h2>
                    <p>An account of my eductaion, qualifications and work experience.</p>
                    <ul className="actions stacked">
                        <li onClick={props.resumeToggleViewState} className="toggleViewBtn"><a className="icon style2 fa-desktop"></a> - View Online</li>
                        <li><a href="https://firebasestorage.googleapis.com/v0/b/kliative.appspot.com/o/Tawanda_Kanyangarara_2019.pdf?alt=media&token=409199e0-296d-400d-ae1b-0b8e5833ee5a" className="icon style2 fa-download"></a> - Download Printable</li>
                    </ul>
                </div>
                <div className="image">
                    <img src={ironManMe} alt="ironman-me" />
                </div>
            </section>
        </div>
    );
}

export default Resume;
