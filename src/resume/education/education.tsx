import React from 'react';
import './education.scss';
import educationImage from '../../shared/images/education_2.jpg';

const Education = (pros: any) => {
    return (
        <div>
            <section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in invert-blue">
                <div className="content">
                    <h3>Education</h3>
                    <dl>
                        <dt>
                            University of the Arts London:
                            London College of Communication
						        <h6>2011 - 2014</h6>
                        </dt>
                        <dd>
                            <p>
                                <i className="fa fa-file-text-o" aria-hidden="true"></i> - Ba(Hons) Digital Media Design
						        </p>

                        </dd>
                        <dt>
                            Open Window School of Visual Communication
						        <h6>2008 -2009</h6>
                        </dt>
                        <dd>
                            <p>
                                <i className="fa fa-file-text-o" aria-hidden="true"></i> - Diploma in Visual Communication
						        </p>
                        </dd>
                    </dl>
                </div>
                <div className="image">
                    <img src={educationImage} alt="" />
                </div>
            </section>
        </div>
    )
};

export default Education;
