import React, { PureComponent } from 'react';
import Particles from 'react-particles-js';

import './repo.scss';
class Repo extends PureComponent {
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
                                "fps_limit": 28,
                                "particles": {
                                    "number": {
                                        "value": 200,
                                        "density": {
                                            "enable": false
                                        }
                                    },
                                    "line_linked": {
                                        "enable": true,
                                        "distance": 30,
                                        "opacity": 0.4
                                    },
                                    "move": {
                                        "speed": 1
                                    },
                                    "opacity": {
                                        "anim": {
                                            "enable": true,
                                            "opacity_min": 0.05,
                                            "speed": 2,
                                            "sync": false
                                        },
                                        "value": 0.4
                                    }
                                },
                                "polygon": {
                                    "enable": true,
                                    "scale": 0.5,
                                    "type": "inline",
                                    "move": {
                                        "radius": 10
                                    },
                                    "url": "https://rpj.bembi.org/small-deer.2a0425af.svg",
                                    "inline": {
                                        "arrangement": "equidistant"
                                    },
                                    "draw": {
                                        "enable": true,
                                        "stroke": {
                                            "color": "rgba(255, 255, 255, .2)"
                                        }
                                    }
                                },
                                "retina_detect": false,
                                "interactivity": {
                                    "events": {
                                        "onhover": {
                                            "enable": true,
                                            "mode": "bubble"
                                        }
                                    },
                                    "modes": {
                                        "bubble": {
                                            "size": 6,
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
}

export default Repo;
