import React from 'react';
import './skils-matrix.scss';

const SkillsMatrix = (pros: any) => {
    return (
        <div>

            {/* <!-- Competence Matrix --> */}
            <section className='wrapper style1 align-center'>
                <div className='inner'>
                    <div className='row align-left'>
                        <div className='col-lg-12'>
                            <h2>Competence Matrix</h2>
                        </div>
                        <div className='col-lg-6'>

                            <h4>Frontend</h4>
                            <div className='form-group'>
                                <label>HTML 5</label>
                                <div className='progress'>
                                    <div className='progress-bar kliblue' role='progressbar' style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>CSS (SASS/SCSS)</label>
                                <div className='progress'>
                                    <div className='progress-bar kliblue' role='progressbar' style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>Javascript (Vanilla)</label>
                                <div className='progress'>
                                    <div className='progress-bar kliblue' role='progressbar' style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                </div>
                            </div>
                            <h4>Backend</h4>
                            <div className='form-group'>
                                <label>Java</label>
                                <div className='progress'>
                                    <div className='progress-bar kliblue' role='progressbar' style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>ASP.NET Core</label>
                                <div className='progress'>
                                    <div className='progress-bar kliblue' role='progressbar' style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <h4>Frameworks</h4>
                            <div className='form-group'>
                                <label>Angular 2+</label>
                                <div className='progress'>
                                    <div className='progress-bar kliblue' role='progressbar' style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>React.js</label>
                                <div className='progress'>
                                    <div className='progress-bar kliblue' role='progressbar' style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>Spring</label>
                                <div className='progress'>
                                    <div className='progress-bar kliblue' role='progressbar' style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>Bootstrap</label>
                                <div className='progress'>
                                    <div className='progress-bar kliblue' role='progressbar' style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>Webpack 2+</label>
                                <div className='progress'>
                                    <div className='progress-bar kliblue' role='progressbar' style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* <!-- DevOps --> */}
            <section className='wrapper style1 align-center'>
                <div className='inner'>
                    <div className='row align-left'>
                        <div className='col-lg-12'>
                            <h2>Dev Ops</h2>
                        </div>
                        <div className='col-lg-6'>
                            <div className='form-group'>
                                <label>CI/CD <small>(Continous Intergration & Continous Deployment)</small></label>
                            </div>
                            <div className='form-group'>
                                <label>Git (bitBucket / github / gitlab)</label>
                                <div className='progress'>
                                    <div className='progress-bar kliblue' role='progressbar' style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>Docker</label>
                                <div className='progress'>
                                    <div className='progress-bar kliblue' role='progressbar' style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='form-group'>
                                <label>Bamboo</label>
                                <div className='progress'>
                                    <div className='progress-bar kliblue' role='progressbar' style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>Jira</label>
                                <div className='progress'>
                                    <div className='progress-bar kliblue' role='progressbar' style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='form-group'>
                                <label>Jenkins</label>
                                <div className='progress'>
                                    <div className='progress-bar kliblue' role='progressbar' style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>


            {/* <!-- Fun Competence Matrix --> */}
            <section className='wrapper style1 align-center'>
                <div className='inner'>
                    <div className='row align-left'>
                        <div className='col-lg-12'>
                            <h2>Hobby Competence Matrix</h2>
                        </div>
                        <div className='col-lg-6'>
                            <div className='form-group'>
                                <label>Arduino (C)</label>
                                <div className='progress'>
                                    <div className='progress-bar kliblue' role='progressbar' style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>Processing (Java / Javascript / Python)</label>
                                <div className='progress'>
                                    <div className='progress-bar kliblue' role='progressbar' style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>Rasperry Pi (Linux: Raspbian)</label>
                                <div className='progress'>
                                    <div className='progress-bar kliblue' role='progressbar' style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>Python (Machine Learning)</label>
                                <div className='progress'>
                                    <div className='progress-bar kliblue' role='progressbar' style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>

                            <div className='form-group'>
                                <label>R (Machine Learning)</label>
                                <div className='progress'>
                                    <div className='progress-bar kliblue' role='progressbar' style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>Swift (iOS)</label>
                                <div className='progress'>
                                    <div className='progress-bar kliblue' role='progressbar' style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>Objective-C</label>
                                <div className='progress'>
                                    <div className='progress-bar kliblue' role='progressbar' style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    )
};

export default SkillsMatrix;