import React, { PureComponent } from 'react';
import './letter.scss';

class Letter extends PureComponent {
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
                            <h3>Cover Letter</h3>
                        </header>
                        <p>
                            My focus is creating human centered designs that allow people to harness the full power of technology to help
					solve their problems and actualise their aspirations.</p>

                        <p>I began my career in the Design sector and switched over into the development world, my ability to learn and
                            apply
                            greatly strengthened my personal resolve and technical execution skills.
				</p>

                        <p>I am an experienced Lead Developer with a proven track record of complete customer satisfaction. My ability
                            to adjust the pace of work to meet evolving client needs allows me to adapt to and excel in any environment.
					Experienced in both working independently and as part of a team.</p>
                    </div>
                </section>
            </div>
        );
    }
}


export default Letter;
