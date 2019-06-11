import React from 'react';
import Particles from 'react-particles-js';

import './repo.scss';
const Repo = (pros: any) => {
    return (
        <div>
            <section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in invert-blue" id="repo">
                <div className="content">
                    <h2>Repository (Github)</h2>
                    <p>View some of my technical projects, download the code. Run it have fun with it.</p>
                    <ul className="actions stacked">
                        <li><a href="https://github.com/Kliative" className="icon style2 fa-github"></a> - View GitHub</li>
                    </ul>
                </div>

                <div className="repo-image" id="particles-js">
                    <Particles
                        params={{
                            "particles": {
                                "number": {
                                    "value": 100
                                },
                                "size": {
                                    "value": 3
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "bubble"
                                    }
                                },
                                "modes": {
                                    "bubble": {
                                        "size": 10,
                                        "distance": 40
                                    }
                                }
                            }
                        }} />
                </div>
            </section>
        </div>
    );
}

export default Repo;
