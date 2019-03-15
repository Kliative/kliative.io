import React, { PureComponent } from 'react';
import './skils-matrix.scss';

class SkillsMatrix extends PureComponent {
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
                                    <label>Javascript (Vanila)</label>
                                    <div className='progress'>
                                        <div className='progress-bar kliblue' role='progressbar' style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0}
                                            aria-valuemax={100}></div>
                                    </div>
                                </div>
                                <h4>Backend</h4>
                                <div className='form-group'>
                                    <label>Java</label>
                                    <div className='progress'>
                                        <div className='progress-bar kliblue' role='progressbar' style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0}
                                            aria-valuemax={100}></div>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label>ASP.NET Core</label>
                                    <div className='progress'>
                                        <div className='progress-bar kliblue' role='progressbar' style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0}
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
                                        <div className='progress-bar kliblue' role='progressbar' style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0}
                                            aria-valuemax={100}></div>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label>Spring</label>
                                    <div className='progress'>
                                        <div className='progress-bar kliblue' role='progressbar' style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0}
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
                                        <div className='progress-bar kliblue' role='progressbar' style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0}
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
                                    <label>CI/CD</label>
                                    <small>(Continous Intergration & Continous Deployment)</small>
                                    <div className='progress'>
                                        <div className='progress-bar kliblue' role='progressbar' style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0}
                                            aria-valuemax={100}></div>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label></label>
                                    <ul>
                                        <li>Atlassian (Jira/Bamboo/Bitbucket)</li>
                                        <li>Jenkins</li>
                                        <li>Docker</li>
                                    </ul>
                                </div>
                                <div className='form-group'>
                                    <label>Git (bitBucket / github / gitlab)</label>
                                    <div className='progress'>
                                        <div className='progress-bar kliblue' role='progressbar' style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0}
                                            aria-valuemax={100}></div>
                                    </div>
                                </div>

                            </div>
                            <div className='col-lg-6'>
                                <div className='form-group'>
                                    <label>Bamboo</label>
                                    <div className='progress'>
                                        <div className='progress-bar kliblue' role='progressbar' style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0}
                                            aria-valuemax={100}></div>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label>Jira</label>
                                    <div className='progress'>
                                        <div className='progress-bar kliblue' role='progressbar' style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0}
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
                                        <div className='progress-bar kliblue' role='progressbar' style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0}
                                            aria-valuemax={100}></div>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label>Processing (Java / Javascript / Python)</label>
                                    <div className='progress'>
                                        <div className='progress-bar kliblue' role='progressbar' style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0}
                                            aria-valuemax={100}></div>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label>Rasperry Pi (Linux: Raspbian)</label>
                                    <div className='progress'>
                                        <div className='progress-bar kliblue' role='progressbar' style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0}
                                            aria-valuemax={100}></div>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label>Python (Machine Learning)</label>
                                    <div className='progress'>
                                        <div className='progress-bar kliblue' role='progressbar' style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0}
                                            aria-valuemax={100}></div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>

                                <div className='form-group'>
                                    <label>R (Machine Learning)</label>
                                    <div className='progress'>
                                        <div className='progress-bar kliblue' role='progressbar' style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0}
                                            aria-valuemax={100}></div>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label>Swift</label>
                                    <div className='progress'>
                                        <div className='progress-bar kliblue' role='progressbar' style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0}
                                            aria-valuemax={100}></div>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label>Objective-C</label>
                                    <div className='progress'>
                                        <div className='progress-bar kliblue' role='progressbar' style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0}
                                            aria-valuemax={100}></div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default SkillsMatrix;