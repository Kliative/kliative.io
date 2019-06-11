import React from 'react';
import './leadership.scss';
import leadershipImg from '../../shared/images/leadership.jpg';

const Leadership = (pros:any) => {
        return (
            <div>
                <section className="spotlight style2 orient-right content-align-center image-position-center onscroll-image-fade-in invert-blue">
                    <div className="content">
                        <h2>Leadership Skills</h2>
                        <div className="items style3 medium onscroll-fade-in">
                            <section>
                                <span className="icon style2 major fa-heartbeat"></span>
                                <h3>Relentless Work Ethic</h3>
                            </section>
                            <section>
                                <span className="icon style2 major fa-balance-scale"></span>
                                <h3>Reasoning</h3>
                            </section>
                            <section>
                                <span className="icon style2 major fa-handshake-o"></span>
                                <h3>Rapport builder</h3>
                            </section>
                            <section>
                                <span className="icon style2 major fa-line-chart"></span>
                                <h3>Patients</h3>
                            </section>
                            <section>
                                <span className="icon style2 major fa-code"></span>
                                <h3>Execution</h3>
                            </section>
                        </div>
                    </div>
                    <div className="image">
                        <img src={leadershipImg} alt="leadership-dog" />
                    </div>
                </section>
            </div>
        )
    };

export default Leadership;
