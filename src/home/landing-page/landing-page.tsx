
import React from 'react';

//Images
import logo from '../../shared/images/kliative_logo.png'
import headerImage from '../../shared/images/banner_me_2.jpg'

//Styles
import './landing-page.scss';

const LandingPage = (pros:any) => {
        return (
            <div className="divided">
                <section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
                    <div className="content">
                        <img src={logo} width="100" alt="" />
                        <h3>Kliative</h3>
                        <small>by Tawanda Kanyangarara.</small>
                        <br/>
                        <br/>   
                        <h4>
                            I building exceptional technology that does not abstain from aesthetical appeal.
                        </h4>                  
                        <p>
                            Take a look at my <a href="#resume"> <u>CV (resume)</u> </a>, my <a href="#design">designs</a>, my <a href="#repo">github</a><br/>
                            for projects I am currently working on.
                        </p>
                        <div className="inner">
                            <ul className="icons">
                                <li><a href="https://github.com/Kliative" className="icon style1 fa-github"><span className="label">GitHub</span></a></li>
                                <li><a href="https://www.behance.net/klish3" className="icon style1 fa-behance"><span className="label">Behance</span></a></li>
                                <li><a href="https://www.instagram.com/klish3/" className="icon style1 fa-instagram"><span className="label">Instagram</span></a></li>
                                <li><a href="https://za.linkedin.com/in/tawandakli" className="icon style1 fa-linkedin"><span className="label">LinkedIn</span></a></li>
                                <li><a href="https://medium.com/@Klish3" className="icon style1 fa-medium"><span className="label">Medium</span></a></li>
                                <li><a href="mailto:tawi@kliative.io" className="icon style1 fa-envelope"><span className="label">Email</span></a></li>
                            </ul>
                        </div>
                        <br/>
                        <div className="inner">
                            <ul className="actions stacked">
                                <li><a href="#design" className="big wide smooth-scroll-middle icon style2 fa-arrow-down"></a></li>
                            </ul>
                        </div>
			        </div>
                    <div className="image">
                        <img src={headerImage} alt="" />
                    </div>
		        </section>
            </div>
        )
};
                                            
export default LandingPage;
