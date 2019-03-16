import React, { PureComponent } from 'react';
import './software.scss';

class Software extends PureComponent {
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
                <section className="wrapper style1 align-center">
                    <div className="inner">
                        <h2>Software</h2>
                        <div className="items style1 medium onscroll-fade-in">
                            <section>
                                <span className="icon style2 major fa-eye"></span>
                                <h3>Front</h3>
                               <p>Angular</p>
                               <p>React</p>
                            </section>
                            <section>
                                <span className="icon style2 major fa-plug"></span>
                                <h3>Middle</h3>
                                <p>Services</p>
                            </section>
                            <section>
                                <span className="icon style2 major fa-table"></span>
                                <h3>Back</h3>
                                <p>Postgress</p>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Software;
