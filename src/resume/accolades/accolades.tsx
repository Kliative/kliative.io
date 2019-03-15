import React, { PureComponent } from 'react';
import './accolades.scss';
import accoladeImg from '../../shared/images/gif/bfc.gif';

class Accolades extends PureComponent {
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
                <section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in invert-blue">
                    <div className="content">
                        <h2>Achievement/Accolades</h2>
                        <dl>
                            <dt>
                                Barclays Africa Group Limited / Absa Capital CIB
                                <br />
                                <u>
                                    Trade Management Channel: Trade Loans
                                </u>
                            </dt>
                            <dd>
                                Presented at the World Economic Forun 2019 by Absa Group CEO Maria Ramos
					        </dd>
                            <dt>Barclays Africa Group Limited | Absa Hackathon <br />
                                <u>2nd Place</u>
                            </dt>
                            <dd>
                                iOS application allowing employess acccess and mananger their HR needs
					        </dd>
                            <br />
                            <dt>University of the Arts London: London College of Communication <br />
                                <u>
                                    Selected as a UAL Futures Candidate
                                    <br />
                                    Inducted into the UAL Genius group
						        </u>
                            </dt>
                            <dd>
                                Final project based on EEG (br/ainwave) technology, <a href="https://vimeo.com/107105548">See video</a>
                            </dd>
                            <br />
                            <dt>
                                Net#work BBDO
						        <u>Won Neotel (Telecommunication) Pitch</u>
                            </dt>
                            <dd>
                                Implemented designed for pitch
					        </dd>

                        </dl>
                    </div>
                    <div className="image">
                        <img src={accoladeImg} alt="" />
                    </div>
                </section>
            </div>
        );
    }
}

export default Accolades;
