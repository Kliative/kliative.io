import React, { PureComponent } from 'react';
import { ButtonToolbar, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import './experience.scss';

class Experience extends PureComponent {
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
                <section className="wrapper style1">
                    <div className="inner">
                        <header>
                            <h2>Experience</h2>
                        </header>
                        <h4>Barclays Africa Group Limited /
                            Absa Capital CIB
					(Corporate Investment Banking) <br />
                            <br />
                            Corporate Technology <br />
                            <u>2016 - present</u>
                        </h4>
                        <dl>
                            <dt>Lead Developer: Open Accounts <br />
                                <u>2019 - present</u>
                            </dt>
                            <dd>
                                <span>
                                    <label>Duties</label>
                                    <ul>
                                        <li>
                                            Upgrade legacy applicatioin
                                        </li>
                                    </ul>
                                </span>
                                <span>
                                    <label>Deliverables</label>
                                    <ul>
                                        <li>
                                            Upgraded Keycloak 1.9 -> 4.8
                                        </li>
                                        <li>
                                            Upgraded AngularJS -> Angular 4+
                                        </li>
                                        <li>
                                            Implemented CI/CD (Bamboo, Jenkins, Bitbucket)
                                        </li>
                                        <li>
                                            Created Documentation (Confluence)
                                        </li>
                                    </ul>
                                </span>
                            </dd>
                        </dl>
                        <dl>
                            <dt>Lead Developer (Interim): General Exposure Managment<br />
                                <u>2018 - December (2 months)</u>
                            </dt>
                            <dd>
                                <span>
                                    <label>Duties</label>
                                    <ul>
                                        <li>
                                            Fill gap left by departing lead
                                        </li>
                                        <li>
                                            Assist in production deployment
                                        </li>
                                    </ul>
                                </span>
                                <span>
                                    <label>Deliverables</label>
                                    <ul>
                                        <li>
                                            Implementation of Keycloack identity and access management
                                        </li>
                                        <li>
                                            Successful production depployment
                                        </li>
                                    </ul>
                                </span>
                            </dd>
                        </dl>
                        <dl>
                            <dt>Lead Developer: Trade Loans <br />
                                <u>June 2018 - present</u>
                            </dt>
                            <dd>
                                <span>
                                    I was solely responsible for the delivery of the Trade Loans Channel and Workflow. Having a limited workforce to assist I had to do most of the developing myself.
                                </span>
                                <span>
                                    <label>Duties</label>
                                    <ul>
                                        <li>
                                            Time-line planning
                                        </li>
                                        <li>
                                            Follow AGILE/KANBAN methods
								        </li>
                                        <li>
                                            Clarifying Technical Requirements
								        </li>
                                    </ul>
                                </span>
                                <span>
                                    <label>Deliverables</label>
                                    <ul>
                                        <li>Streamlined UX processes</li>
                                        <OverlayTrigger
                                            key='top'
                                            placement="top"
                                            overlay={
                                                <Tooltip id={`tooltip-top`}>

                                                    <ul>
                                                        <li>
                                                            Kenya
                                                        </li>
                                                        <li>
                                                            Mauritius
                                                        </li>
                                                        <li>
                                                            Botswana
                                                        </li>
                                                    </ul>
                                                </Tooltip>
                                            }>
                                            <li>
                                                Completed product deployed accross Africa <i className="fa fa-info-circle"></i>
                                            </li>
                                        </OverlayTrigger>


                                    </ul>
                                </span>
                                <span>
                                    <label htmlFor=""> <i className="fa fa-star"></i> Achievement</label>
                                    Presented at the World Economic Forun 2019 by Absa Group CEO Maria Ramos
                                </span>
                            </dd>
                        </dl>

                        <dl>
                            <dt>UX Developer: Corporate Technology<br />
                                <u>2017 January - 2018 June</u>
                            </dt>
                            <dd>
                                <span>
                                    Trade Management Channel: Inspired by the Trade Loan: Smart Form
                                </span>
                                <br/>
                                <br/>
                                <span>
                                    <label htmlFor=""> <i className="fa fa-star"></i> Achievement</label>
                                    Promoted from Graduate program to join Corporate Technology
                                </span>
                            </dd>
                        </dl>
                        <dl>
                            <dt>Front End Developer: CIB Digital<br />
                                <u>2016 August - 2016 Decemeber</u> | <i>Graduate progarm rotation</i>
                            </dt>
                            <dd>
                                <span>
                                    Trade Loan: Smart Forms
                                </span>
                                <br/>
                                <br/>
                                <span>
                                    <label htmlFor=""> <i className="fa fa-star"></i> Achievement</label>
                                    The project was a digitization of an International Trade Loan application form. Inspired Trade Management Channel
                                </span>
                            </dd>
                        </dl>
                        <dl>

                            <h4>Distribution Mobile Development Team</h4>
                            <dt>Junior iOS Developer <br />

                                <br />
                                <u>Jan 2017 - June 2018</u> | <i>Graduate progarm rotation</i>
                            </dt>
                            <dd>
                                <span>
                                    <label>Duties</label>
                                    <ul>
                                        <li>UI Testing </li>
                                    </ul>
                                </span>
                            </dd>
                        </dl>

                    </div>
                </section>
            </div>
        );
    }
}

export default Experience;
