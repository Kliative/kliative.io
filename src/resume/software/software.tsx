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
                                <span className="icon style2 major fa-diamond"></span>
                                <h3>DDD</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam
							congue semper. Etiam eget ultrices risus nec tempor elit.</p>
                            </section>
                            <section>
                                <span className="icon style2 major fa-save"></span>
                                <h3>TDD</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam
							congue semper. Etiam eget ultrices risus nec tempor elit.</p>
                            </section>
                            <section>
                                <span className="icon style2 major fa-bar-chart"></span>
                                <h3>Dolor</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam
							congue semper. Etiam eget ultrices risus nec tempor elit.</p>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Software;
