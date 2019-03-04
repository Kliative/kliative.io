import React, { PureComponent } from 'react';
import './leadership.scss';
import leadershipImg from '../../shared/images/leadership.jpg';

class Leadership extends PureComponent {
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
                <section className="spotlight style2 orient-right content-align-center image-position-center onscroll-image-fade-in invert-blue">
                    <div className="content">
                        <h2>Leadership Skills</h2>
                        <div className="items style3 medium onscroll-fade-in">
                            <section>
                                <span className="icon style2 major fa-diamond"></span>
                                <h3>Empathy</h3>
                            </section>
                            <section>
                                <span className="icon style2 major fa-save"></span>
                                <h3>Reasoning</h3>
                            </section>
                            <section>
                                <span className="icon style2 major fa-bar-chart"></span>
                                <h3>Repor</h3>
                            </section>
                            <section>
                                <span className="icon style2 major fa-wifi"></span>
                                <h3>Patients</h3>
                            </section>
                            <section>
                                <span className="icon style2 major fa-wifi"></span>
                                <h3>Execution</h3>
                            </section>
                        </div>
                    </div>
                    <div className="image">
                        <img src={leadershipImg} alt="leadership-dog" />
                    </div>
                </section>
            </div>
        );
    }
}

export default Leadership;
